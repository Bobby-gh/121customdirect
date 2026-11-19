'use client'

import { useEffect, useRef } from 'react'

const LINK_DISTANCE = 140
const POINTER_REACH = 170

export default function HeroMotion() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduced = motionQuery.matches
    let width = 0
    let height = 0
    let nodes = []
    let frame = 0
    const pointer = { x: 0, y: 0, active: false }

    const seed = () => {
      const count = Math.max(16, Math.min(48, Math.round(width / 36)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 0.8 + Math.random() * 1.4,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)
          if (distance > LINK_DISTANCE) continue
          ctx.strokeStyle = `rgba(127, 224, 234, ${(0.18 * (1 - distance / LINK_DISTANCE)).toFixed(3)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }

        if (pointer.active) {
          const distance = Math.hypot(a.x - pointer.x, a.y - pointer.y)
          if (distance < POINTER_REACH) {
            ctx.strokeStyle = `rgba(191, 245, 250, ${(0.22 * (1 - distance / POINTER_REACH)).toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(pointer.x, pointer.y)
            ctx.stroke()
          }
        }

        ctx.fillStyle = 'rgba(203, 247, 251, 0.7)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        node.x = Math.min(Math.max(node.x, 0), width)
        node.y = Math.min(Math.max(node.y, 0), height)

        if (pointer.active) {
          const dx = node.x - pointer.x
          const dy = node.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance > 0.001 && distance < POINTER_REACH) {
            const push = (1 - distance / POINTER_REACH) * 0.4
            node.x += (dx / distance) * push
            node.y += (dy / distance) * push
          }
        }
      }

      draw()
      frame = window.requestAnimationFrame(step)
    }

    const start = () => {
      if (reduced || frame) return
      frame = window.requestAnimationFrame(step)
    }

    const stop = () => {
      if (!frame) return
      window.cancelAnimationFrame(frame)
      frame = 0
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()

      if (reduced) {
        stop()
        draw()
      }
    }

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        pointer.active = false
        return
      }
      pointer.x = x
      pointer.y = y
      pointer.active = true
    }

    const handlePointerLeave = () => {
      pointer.active = false
    }

    const handleVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    const handleMotionChange = (event) => {
      reduced = event.matches
      if (reduced) {
        stop()
        draw()
      } else {
        start()
      }
    }

    resize()
    start()

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('visibilitychange', handleVisibility)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibility)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-motion" aria-hidden="true" />
}
