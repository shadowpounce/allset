import { useEffect, useState } from 'react'

import gsap from 'gsap'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

export const WithScrollSmoother = ({ children }) => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    if (pageLoaded) {
      const lines = Array.from(document.querySelectorAll('.line'))
      const counters = Array.from(document.querySelectorAll('.counter'))
      const drawableElements = Array.from(
        document.querySelectorAll('.drawable-arrow')
      )
      const splitTexts = Array.from(document.querySelectorAll('.split-text'))

      drawableElements.map((el) => {
        ScrollTrigger.create({
          trigger: el.closest('.section'),
          start: el.dataset.start ?? `top top+=50%`,
          end: el.dataset.end ?? `bottom bottom-=75%`,
          scrub: 1,
          animation: gsap.to(el, {
            strokeDashoffset: 0,
            duration: el.dataset.duration ? el.dataset.duration : 3,
            ease: el.dataset.ease ?? 'ease',
            delay: el.dataset.delay ? Number(el.dataset.delay) : 0,
          }),
        })
      })

      counters.map((counter) => {
        ScrollTrigger.create({
          trigger: counter,
          start: counter.dataset.start ?? `top top+=75%`,
          once: true,
          onEnter: () => {
            gsap.fromTo(
              counter,
              {
                textContent: 0,
                duration: 2,
                ease: 'ease',
                snap: { textContent: 1 },
                stagger: 1,
              },
              {
                textContent: counter.dataset.end,
                duration: 2,
                ease: 'ease',
                snap: { textContent: 1 },
                stagger: 1,
              }
            )
          },
        })
      })

      lines.map((line) => {
        ScrollTrigger.create({
          trigger: line,
          start: line.dataset.start ?? `top top+=75%`,
          onEnter: () =>
            gsap.to(
              line,
              line.classList.contains('x')
                ? {
                    scaleX: 1,
                    duration: line.dataset.duration
                      ? line.dataset.duration
                      : 0.5,
                    ease: line.dataset.ease ?? 'ease',
                    delay: line.dataset.delay ? Number(line.dataset.delay) : 0,
                  }
                : {
                    scaleY: 1,
                    duration: line.dataset.duration
                      ? line.dataset.duration
                      : 0.5,
                    ease: line.dataset.ease ?? 'ease',
                    delay: line.dataset.delay ? Number(line.dataset.delay) : 0,
                  }
            ),
        })
      })

      if (splitTexts) {
        splitTexts.map((sItem) => {
          const split = new SplitText(sItem, {
            type: 'words',
          })

          split.words.map((word, idx) => {
            word.classList.add('reveal', 'word')
            word.dataset.delay = `${idx * (sItem.dataset.delayKef ?? 0.05)}`
            word.dataset.trigger = '.split-text'
            word.dataset.start = `${sItem.dataset.start ?? `top top+=87.5%`}`
          })
        })
      }

      const revealElements = Array.from(document.querySelectorAll('.reveal'))

      revealElements.map((item) => {
        item.dataset.toReveal = 'true'

        if (!item.dataset.pin) {
          ScrollTrigger.create({
            trigger: item.dataset.trigger
              ? item.closest(item.dataset.trigger)
              : item,
            start: item.dataset.start ?? `top top+=87.5%`,
            onEnter: () =>
              gsap.to(item, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                xPercent: 0,
                yPercent: 0,
                y: 0,
                x: 0,
                z: 0,
                duration: item.dataset.duration ? item.dataset.duration : 3,
                ease: item.dataset.ease ? 'ease' : 'elastic.out(1,0.3)',
                delay: item.dataset.delay ? Number(item.dataset.delay) : 0,
              }),
          })
        }
      })
    }
  }, [pageLoaded])

  setTimeout(() => {
    setPageLoaded(true)
  }, 1000)

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 0.5,
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
