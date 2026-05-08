import { useEffect, useState, useCallback } from "react"

export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }, [])

  useEffect(() => {
    let raf: number
    const throttled = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => handleMouseMove(e))
    }
    window.addEventListener("mousemove", throttled, { passive: true })
    return () => {
      window.removeEventListener("mousemove", throttled)
      cancelAnimationFrame(raf)
    }
  }, [handleMouseMove])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251,191,36,0.06), transparent 80%)`,
      }}
    />
  )
}
