import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const [visible, setVisible] = useState(false)
  const [direction, setDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let lastScroll = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScroll = window.scrollY
        setDirection(currentScroll > lastScroll ? "down" : "up")
        lastScroll = currentScroll

        setVisible(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`panel-reveal ${visible ? "visible" : ""} from-${direction} ${className}`}
    >
      {children}
    </div>
  )
}