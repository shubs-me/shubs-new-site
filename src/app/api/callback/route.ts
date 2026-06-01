import { NextRequest, NextResponse } from 'next/server'

/**
 * Step 2 of the Decap CMS GitHub OAuth flow.
 * Exchanges the code for an access token, then hands it back to the Decap
 * window via the postMessage handshake it expects.
 */
export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GitHub OAuth env vars are not configured' },
      { status: 500 },
    )
  }

  const code = new URL(req.url).searchParams.get('code')
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  })
  const data = (await tokenRes.json()) as {
    access_token?: string
    error?: string
  }

  const ok = Boolean(data.access_token)
  const content = ok
    ? { token: data.access_token, provider: 'github' }
    : { error: data.error || 'OAuth failed' }

  // Decap listens for a window message in this exact shape.
  const script = `<!doctype html><html><body><script>
    (function () {
      function send(ok, msg) {
        window.opener &&
          window.opener.postMessage('authorization:github:' + (ok ? 'success' : 'error') + ':' + msg, '*');
      }
      window.addEventListener('message', function () {
        send(${ok}, '${JSON.stringify(content).replace(/'/g, "\\'")}');
      }, { once: true });
      window.opener && window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`

  return new NextResponse(script, {
    headers: { 'Content-Type': 'text/html' },
  })
}
