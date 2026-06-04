'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll-motion behaviours ported from the design handoff's anim.js:
 * reveal-on-scroll (one-shot), the Services pill shoot-in, headline "grow",
 * image parallax, and the nav bottom-hairline on scroll.
 *
 * Visibility is driven by INLINE styles so an element can never get stuck
 * invisible, and the whole module no-ops under prefers-reduced-motion.
 * Re-runs whenever the route changes so client-navigated pages animate too.
 */
export default function SiteMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let vh = innerHeight
    const EASE =
      'opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)'
    const EASE_PILL =
      'opacity .5s ease, transform .85s cubic-bezier(.34,1.4,.5,1)'

    type Kind = 'up' | 'left' | 'right' | 'pill-left' | 'pill-right'
    interface Target extends HTMLElement {
      _rt?: { el: HTMLElement; delay: number }[]
      _delay?: number
    }

    const timeouts: ReturnType<typeof setTimeout>[] = []

    function hide(el: HTMLElement, kind: Kind) {
      el.style.willChange = 'opacity, transform'
      el.style.opacity = '0'
      if (kind === 'left') {
        el.style.transform = 'translateX(-80px)'
        el.style.transition = EASE
      } else if (kind === 'right') {
        el.style.transform = 'translateX(80px)'
        el.style.transition = EASE
      } else if (kind === 'pill-left') {
        el.style.transform = 'translateX(calc(-50vw - 100%)) rotate(-3deg)'
        el.style.transition = EASE_PILL
      } else if (kind === 'pill-right') {
        el.style.transform = 'translateX(calc(50vw + 100%)) rotate(3deg)'
        el.style.transition = EASE_PILL
      } else {
        el.style.transform = 'translateY(32px)'
        el.style.transition = EASE
      }
    }
    function show(el: HTMLElement, delay: number) {
      timeouts.push(
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        }, delay || 0),
      )
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target as Target
            if (t._rt) t._rt.forEach((o) => show(o.el, o.delay))
            else show(t, t._delay || 0)
            io.unobserve(t)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    function reveal(el: HTMLElement | null, kind: Kind, delay: number) {
      if (!el) return
      hide(el, kind)
      ;(el as Target)._delay = delay || 0
      io.observe(el)
    }
    function revealVia(
      el: HTMLElement | null,
      trigger: Target | null,
      kind: Kind,
      delay: number,
    ) {
      if (!el || !trigger) return
      hide(el, kind)
      ;(trigger._rt = trigger._rt || []).push({ el, delay: delay || 0 })
      io.observe(trigger)
    }

    const q = <T extends Element = HTMLElement>(sel: string) =>
      Array.from(document.querySelectorAll<T>(sel))

    // up-reveals
    q<HTMLElement>(
      [
        '.sec-head', '.prose', '.pillar', '.out-item', '.think-row', '.feat',
        '.pod', '.mani', '.lived-body', '.gap-col', '.photo-card',
        '.hero-lead', '.hero-cta', '.contact p', '.form', '.eng-card', '.who-card',
      ].join(','),
    ).forEach((el) => reveal(el, 'up', 0))

    // staggered grid children
    q<HTMLElement>('.stats-grid, .three, .plinks, .cinfo, .idl-grid, .tst-grid').forEach(
      (grp) => {
        Array.from(grp.children).forEach((ch, i) =>
          reveal(ch as HTMLElement, 'up', i * 70),
        )
      },
    )

    // practice blocks
    q<HTMLElement>('.pblock').forEach((b) => {
      reveal(b.querySelector('.pnum'), 'left', 0)
      reveal(b.querySelector('div:last-child'), 'up', 120)
    })

    // pills — shoot in from alternating sides, triggered by the parent block
    q<Target>('.aud').forEach((aud, i) => {
      revealVia(aud.querySelector('.ak'), aud, i % 2 ? 'pill-right' : 'pill-left', 0)
    })

    /* ---------- scroll-linked: grow + parallax ---------- */
    const grows = q<HTMLElement>('.sec-title, .contact h2, .out-hero .big')
    grows.forEach((el) => {
      el.style.transformOrigin =
        getComputedStyle(el).textAlign === 'center' ? '50% 50%' : '0% 50%'
      el.style.willChange = 'transform, opacity'
    })

    const paras: { el: HTMLElement; f: number; fade: boolean }[] = []
    q<HTMLElement>('.hero-photo img').forEach((el) =>
      paras.push({ el, f: -24, fade: true }),
    )
    q<HTMLElement>('.photo-card img, .feat .fr img, .pod img, .lived-photo img').forEach(
      (el) => paras.push({ el, f: -16, fade: false }),
    )

    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)

    let ticking = false
    function frame() {
      ticking = false
      for (const el of grows) {
        const r = el.getBoundingClientRect()
        const p = clamp((vh * 0.95 - r.top) / (vh * 0.5), 0, 1)
        el.style.transform = 'scale(' + (0.9 + 0.1 * p).toFixed(3) + ')'
        el.style.opacity = (0.32 + 0.68 * p).toFixed(3)
      }
      for (const o of paras) {
        const rr = o.el.getBoundingClientRect()
        const off = (rr.top + rr.height / 2 - vh / 2) / vh
        let tr = 'translateY(' + (clamp(off, -1, 1) * o.f).toFixed(1) + 'px)'
        if (o.fade) {
          tr += ' scale(1.02)'
          o.el.style.opacity = clamp(
            1 - Math.max(0, -off - 0.12) * 1.6,
            0.12,
            1,
          ).toFixed(3)
        }
        o.el.style.transform = tr
      }
    }
    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }
    function onResize() {
      vh = innerHeight
      onScroll()
    }

    // nav bottom-hairline once scrolled
    const nav = document.getElementById('nav')
    function onNavScroll() {
      if (nav) nav.classList.toggle('scrolled', scrollY > 20)
    }

    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('scroll', onNavScroll, { passive: true })
    addEventListener('resize', onResize)
    frame()
    onNavScroll()

    return () => {
      io.disconnect()
      timeouts.forEach(clearTimeout)
      removeEventListener('scroll', onScroll)
      removeEventListener('scroll', onNavScroll)
      removeEventListener('resize', onResize)
    }
  }, [pathname])

  return null
}
