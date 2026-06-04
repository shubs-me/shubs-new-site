'use client'

import { useEffect, useRef, useState, Fragment } from 'react'
import Link from 'next/link'
import ExtLink from '@/components/ExtLink'
import Em from '@/components/Em'
import contact from '@/../content/contact.json'

// Web3Forms access key. This is a *public* submit key by design (it ships in
// the page's HTML; Web3Forms handles spam + delivery), so it's safe to commit.
// Defaults to Shubs' form; override with NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY if needed.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  'd47e93fd-5d67-4c44-bb16-41b3876065da'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const doneRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the confirmation once the form is replaced, so keyboard and
  // screen-reader users are taken to the success message.
  useEffect(() => {
    if (submitted) doneRef.current?.focus()
  }, [submitted])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = nameRef.current
    const email = emailRef.current
    if (!name?.value.trim() || !email?.value.trim()) {
      ;(name?.value.trim() ? email : name)?.focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const data = (await res.json().catch(() => ({}))) as { success?: boolean }
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const f = contact.form

  return (
    <>
      {/* HERO */}
      <header
        className="page-hero"
        style={{ paddingBottom: 'clamp(20px,3vw,40px)' }}
      >
        <div className="wrap">
          <span className="label">{contact.hero.label}</span>
          <h1>
            <Em {...contact.hero.title} />
          </h1>
          <p className="sub">{contact.hero.sub}</p>
        </div>
      </header>

      {/* FORM + INFO */}
      <section style={{ paddingTop: 'clamp(40px,6vw,80px)' }}>
        <div className="wrap contact-grid">
          {/* form */}
          <div>
            <h2 className="sr-only">Send a message</h2>
            {!submitted ? (
              <form className="form" onSubmit={handleSubmit} noValidate>
                {/* Web3Forms config + spam honeypot */}
                <input type="hidden" name="access_key" value={ACCESS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="New enquiry via shubs.me"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="shubs.me contact form"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  style={{ display: 'none' }}
                />
                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">{f.nameLabel}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={f.namePlaceholder}
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{f.emailLabel}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={f.emailPlaceholder}
                      ref={emailRef}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="org">{f.orgLabel}</label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    placeholder={f.orgPlaceholder}
                  />
                </div>
                <div className="field">
                  <label htmlFor="role">{f.roleLabel}</label>
                  <select id="role" name="role" defaultValue={f.roleOptions[0]}>
                    {f.roleOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="msg">{f.msgLabel}</label>
                  <textarea
                    id="msg"
                    name="msg"
                    placeholder={f.msgPlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-clay"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : f.submitLabel}
                </button>
                {status === 'error' && (
                  <p
                    role="alert"
                    style={{
                      marginTop: 16,
                      color: 'var(--clay-deep)',
                      fontSize: 15,
                      lineHeight: 1.5,
                    }}
                  >
                    Something went wrong sending your message. Please try again,
                    or reach me via LinkedIn.
                  </p>
                )}
              </form>
            ) : (
              <div className="cdone" role="status" aria-live="polite">
                <div className="label" style={{ marginBottom: 18 }}>
                  {f.sentKicker}
                </div>
                <h3 ref={doneRef} tabIndex={-1} style={{ outline: 'none' }}>
                  {f.sentTitle}
                </h3>
                <p>{f.sentBody}</p>
              </div>
            )}
          </div>

          {/* info */}
          <div className="cinfo">
            <h2 className="sr-only">Other ways to reach me</h2>
            {contact.info.map((row) => (
              <div className="row" key={row.title}>
                <div className="k">{row.k}</div>
                <h3>{row.title}</h3>
                <p>
                  {row.body}
                  {'linkLabel' in row && row.linkLabel ? (
                    <>
                      {' '}
                      {row.linkHref && row.linkHref.startsWith('/') ? (
                        <Link className="inl" href={row.linkHref}>
                          {row.linkLabel}
                        </Link>
                      ) : (
                        <a className="inl" href={row.linkHref}>
                          {row.linkLabel}
                        </a>
                      )}
                    </>
                  ) : null}
                </p>
              </div>
            ))}
            <div className="row">
              <div className="k">{contact.connect.k}</div>
              <h3>{contact.connect.title}</h3>
              <p>
                {contact.connect.links.map((link, i) => (
                  <Fragment key={link.href}>
                    {i > 0 ? ' · ' : ''}
                    <ExtLink className="inl" href={link.href}>
                      {link.label}
                    </ExtLink>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
