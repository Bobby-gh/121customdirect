'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SPOTLIGHT_SELECTOR = [
  '.service-card',
  '.declaration-card',
  '.step-card',
  '.partner-tile',
  '.value-card',
  '.audience-card',
  '.faq-item',
  '.stats-band-item',
].join(',')

const TILT_SELECTOR = ['.service-card', '.partner-tile', '.system-shot'].join(',')

const TILT_LIMIT = 4
const SHOT_TILT_LIMIT = 1.6

export default function CardMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined

    const targets = Array.from(
      new Set([
        ...document.querySelectorAll(SPOTLIGHT_SELECTOR),
        ...document.querySelectorAll(TILT_SELECTOR),
      ])
    )

    if (!targets.length) return undefined

    const teardown = []

    targets.forEach((element) => {
      const spotlight = element.matches(SPOTLIGHT_SELECTOR)
      const tilt = element.matches(TILT_SELECTOR)
      const limit = element.classList.contains('system-shot') ? SHOT_TILT_LIMIT : TILT_LIMIT

      if (spotlight) element.classList.add('card-spotlight')
      if (tilt) element.classList.add('card-tilt')

      let frame = 0
      let pointer = null

      const paint = () => {
        frame = 0
        if (!pointer) return

        element.style.setProperty('--pointer-x', `${pointer.x}px`)
        element.style.setProperty('--pointer-y', `${pointer.y}px`)

        if (!tilt) return

        element.style.setProperty('--tilt-y', `${(pointer.ratioX - 0.5) * limit * 2}deg`)
        element.style.setProperty('--tilt-x', `${(0.5 - pointer.ratioY) * limit * 2}deg`)
      }

      const queue = () => {
        if (frame) return
        frame = window.requestAnimationFrame(paint)
      }

      const onEnter = (event) => {
        element.classList.add('is-pointer')
        if (tilt) element.classList.add('is-tilting')
        onMove(event)
      }

      const onMove = (event) => {
        const rect = element.getBoundingClientRect()
        pointer = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          ratioX: (event.clientX - rect.left) / Math.max(rect.width, 1),
          ratioY: (event.clientY - rect.top) / Math.max(rect.height, 1),
        }
        queue()
      }

      const onLeave = () => {
        element.classList.remove('is-pointer', 'is-tilting')
        element.style.removeProperty('--pointer-x')
        element.style.removeProperty('--pointer-y')
        element.style.removeProperty('--tilt-x')
        element.style.removeProperty('--tilt-y')
      }

      element.addEventListener('pointerenter', onEnter)
      element.addEventListener('pointermove', onMove)
      element.addEventListener('pointerleave', onLeave)

      teardown.push(() => {
        window.cancelAnimationFrame(frame)
        element.removeEventListener('pointerenter', onEnter)
        element.removeEventListener('pointermove', onMove)
        element.removeEventListener('pointerleave', onLeave)
        onLeave()
      })
    })

    return () => teardown.forEach((fn) => fn())
  }, [pathname])

  return null
}
