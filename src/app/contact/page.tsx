'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const name = nameRef.current
    const email = emailRef.current
    if (!name?.value.trim() || !email?.value.trim()) {
      ;(name?.value.trim() ? email : name)?.focus()
      return
    }
    // TODO: wire to a real submit endpoint / email service in production.
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <header
        className="page-hero"
        style={{ paddingBottom: 'clamp(20px,3vw,40px)' }}
      >
        <div className="wrap">
          <span className="label">Contact</span>
          <h1>
            Let&apos;s build something <em>the right way.</em>
          </h1>
          <p className="sub">
            Whether you&apos;re building a digital health product that needs to hold up to
            clinical scrutiny, or investing in the organisations doing that work — every
            conversation starts by understanding what you&apos;re actually trying to
            achieve.
          </p>
        </div>
      </header>

      {/* FORM + INFO */}
      <section style={{ paddingTop: 'clamp(40px,6vw,80px)' }}>
        <div className="wrap contact-grid">
          {/* form */}
          <div>
            {!submitted ? (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      ref={emailRef}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="org">Organisation</label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    placeholder="Company, fund, or foundation"
                  />
                </div>
                <div className="field">
                  <label htmlFor="role">I am…</label>
                  <select id="role" name="role" defaultValue="A founder or product leader">
                    <option>A founder or product leader</option>
                    <option>An investor, funder, or foundation</option>
                    <option>A medical or clinical leader</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="msg">What are you trying to achieve?</label>
                  <textarea
                    id="msg"
                    name="msg"
                    placeholder="A sentence or two on where you are and what's on your mind."
                  />
                </div>
                <button type="submit" className="btn btn-clay">
                  Send message →
                </button>
              </form>
            ) : (
              <div className="cdone">
                <div className="label" style={{ marginBottom: 18 }}>
                  Message sent
                </div>
                <h3>Thanks — I&apos;ll be in touch.</h3>
                <p>
                  Every message reaches me directly. Expect an honest reply within a
                  couple of working days.
                </p>
              </div>
            )}
          </div>

          {/* info */}
          <div className="cinfo">
            <div className="row">
              <div className="k">What to expect</div>
              <h4>An honest conversation</h4>
              <p>
                No pitch, no hard sell. We start by understanding what you&apos;re trying
                to achieve and whether I&apos;m the right person to help.
              </p>
            </div>
            <div className="row">
              <div className="k">Prefer to book directly?</div>
              <h4>Grab a time that works</h4>
              <p>
                Skip the form and put a slot in the diary.{' '}
                <a className="inl" href="#">
                  Book a call →
                </a>
              </p>
            </div>
            <div className="row">
              <div className="k">Engagements</div>
              <h4>Three ways to work together</h4>
              <p>
                Retainer advisory · Three-month sprint · Workshop &amp; keynote.{' '}
                <Link className="inl" href="/services">
                  See services →
                </Link>
              </p>
            </div>
            <div className="row">
              <div className="k">Connect</div>
              <h4>Find me elsewhere</h4>
              <p>
                <a
                  className="inl"
                  href="https://linkedin.com/in/shubs-upadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                ·{' '}
                <a
                  className="inl"
                  href="https://shubstack.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shubstack
                </a>{' '}
                ·{' '}
                <a
                  className="inl"
                  href="https://gpodh.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GPODH Podcast
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
