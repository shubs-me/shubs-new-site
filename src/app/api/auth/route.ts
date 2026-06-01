import { NextRequest, NextResponse } from 'next/server'

/**
 * Step 1 of the Decap CMS GitHub OAuth flow.
 * Redirects the editor to GitHub's authorize screen.
 *
 * Requires env vars (set in Vercel):
 *   OAUTH_GITHUB_CLIENT_ID
 *   OAUTH_GITHUB_CLIENT_SECRET   (used in the callback)
 */
export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID
  if (!clientId) {
    return NextResponse.json(
      { error: 'OAUTH_GITHUB_CLIENT_ID is not configured' },
      { status: 500 },
    )
  }

  const origin = new URL(req.url).origin
  const redirectUri = `${origin}/api/callback`

  const authUrl = new URL('https://github.com/login/oauth/authorize')
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('redirect_uri', redirectUri)
  authUrl.searchParams.set('scope', 'repo,user')
  authUrl.searchParams.set('state', crypto.randomUUID())

  return NextResponse.redirect(authUrl.toString())
}
