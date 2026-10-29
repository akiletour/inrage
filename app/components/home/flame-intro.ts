import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BIRTH_ORDER = [5, 4, 3, 2, 1, 0]

export function runFlameIntro(el: HTMLElement) {
  const context = gsap.context(() => {
    const petals = BIRTH_ORDER.map((i) =>
      el.querySelector<HTMLElement>(`[data-petal="${i}"]`)!
    )
    const ashes = gsap.utils.toArray<HTMLElement>('.home-flame-ash', el)
    const ring = el.querySelector<HTMLElement>('.home-flame-ring')!
    const flash = el.querySelector<HTMLElement>('.home-flame-flash')!
    const stage = el.querySelector<HTMLElement>('.home-flame-stage')!
    const ghosts = gsap.utils.toArray<HTMLElement>('.home-flame-ghost', el)
    const colors = gsap.utils.toArray<HTMLElement>('.home-flame-color', el)
    const section = el.closest<HTMLElement>('section') ?? el
    const texts = gsap.utils.toArray<HTMLElement>('[data-hero-text]', section)

    const breathing: gsap.core.Tween[] = []
    let breathTrigger: ScrollTrigger | undefined

    const breathe = () => {
      const tweens = petals.map((petal, i) =>
        gsap.to(petal, {
          opacity: 0.93 + i * 0.01,
          yPercent: -(0.4 + i * 0.15),
          duration: gsap.utils.random(0.9, 1.6),
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 0.6),
        })
      )
      tweens.push(
        gsap.to(stage, {
          rotate: 0.4,
          duration: 7,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )
      breathing.push(...tweens)
      breathTrigger = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) =>
          tweens.forEach((tween) =>
            self.isActive ? tween.play() : tween.pause()
          ),
      })
    }

    const convertOnScroll = () => {
      gsap.set(ghosts, { opacity: 0 })
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '40% top',
          scrub: 0.6,
        },
      })
      st.to(ghosts, { opacity: 1, ease: 'none' }, 0).to(
        colors,
        { opacity: 0, ease: 'none' },
        0
      )
      return () => {
        st.scrollTrigger?.kill()
        st.kill()
      }
    }

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set([...petals, ...texts], { opacity: 1 })
    })

    mm.add(
      '(prefers-reduced-motion: no-preference) and (max-width: 639px)',
      () => {
        gsap.set([...ashes, ring, flash], { display: 'none' })
        gsap.set(petals, {
          opacity: 0,
          scale: 0.9,
          transformOrigin: '62% 70%',
        })
        gsap.set(texts, { opacity: 0, y: 16 })
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .to(petals, { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08 })
          .to(texts, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0.5)
          .call(breathe, [], 1.3)
        return convertOnScroll()
      }
    )

    mm.add(
      '(prefers-reduced-motion: no-preference) and (min-width: 640px)',
      () => {
        const w = el.clientWidth
        const h = el.clientHeight

        gsap.set(petals, {
          opacity: 0,
          scale: 0,
          rotate: () => gsap.utils.random(-140, 140),
          x: () => gsap.utils.random(-w * 0.5, w * 0.5),
          y: () => gsap.utils.random(-h * 0.5, h * 0.5),
          transformOrigin: '62% 70%',
        })
        gsap.set(ashes, {
          opacity: 0,
          x: () => gsap.utils.random(-w * 1.6, w * 1.6),
          y: () => gsap.utils.random(-h * 1.4, h * 1.4),
          scale: () => gsap.utils.random(0.4, 1.4),
        })
        gsap.set(ring, { opacity: 0, scale: 0.2 })
        gsap.set(flash, { opacity: 0, scale: 0.2 })
        gsap.set(texts, { opacity: 0, y: 24 })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.to(ashes, {
          opacity: 1,
          duration: 0.35,
          stagger: { each: 0.012, from: 'random' },
        })
          .to(
            ashes,
            {
              x: 0,
              y: 0,
              scale: 0.3,
              duration: 1.1,
              ease: 'power4.in',
              stagger: { each: 0.014, from: 'random' },
            },
            0.1
          )
          .to(ashes, { opacity: 0, duration: 0.15 }, 1.25)
          .set(ashes, { display: 'none' }, 1.45)
          .to(
            flash,
            { opacity: 1, scale: 1.4, duration: 0.22, ease: 'power2.out' },
            1.25
          )
          .to(flash, { opacity: 0, scale: 2.2, duration: 0.6 }, 1.47)
          .to(ring, { opacity: 0.9, scale: 1, duration: 0.05 }, 1.3)
          .to(
            ring,
            { scale: 3.2, opacity: 0, duration: 1.1, ease: 'expo.out' },
            1.35
          )
          .set([ring, flash], { display: 'none' }, 2.5)
          .to(
            petals,
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: 0,
              y: 0,
              duration: 1.15,
              ease: 'elastic.out(1, 0.55)',
              stagger: 0.09,
            },
            1.32
          )
          .fromTo(
            stage,
            { scale: 0.92 },
            { scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.4)' },
            1.4
          )
          .to(
            texts,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.09,
              ease: 'power3.out',
            },
            1.9
          )
          .call(breathe, [], 2.6)

        return convertOnScroll()
      }
    )

    return () => {
      breathTrigger?.kill()
      breathing.forEach((tween) => tween.kill())
      mm.revert()
    }
  }, el)

  return () => context.revert()
}
