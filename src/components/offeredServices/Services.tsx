import { useEffect, useRef, useState } from "react"
import { services } from "./ServicesData"
import "../../stylesheets/Services.scss"

export default function Services() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const [prevIndex, setPrevIndex] = useState<number | null>(
    null
  )

  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([])

  const sectionRef = useRef<HTMLElement | null>(null)

  const active = services[index]
  const prev =
    prevIndex !== null ? services[prevIndex] : null

  /* =========================
     NAVIGATION
  ========================= */

  function next() {
    setPrevIndex(index)
    setIndex(i => (i + 1) % services.length)
  }

  function select(i: number) {
    if (i === index) return
    setPrevIndex(index)
    setIndex(i)
  }

  /* =========================
     AUTO CAROUSEL
  ========================= */

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [paused, index])

  /* Remove previous after exit animation */

  useEffect(() => {
    if (prevIndex === null) return
    const t = setTimeout(() => {
      setPrevIndex(null)
    }, 350) // match CSS exit duration
    return () => clearTimeout(t)
  }, [prevIndex])

  /* =========================
     RIPPLE WAVES
  ========================= */

  function spawnRipple(e: React.PointerEvent) {
    const rect = sectionRef.current!.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples(r => [...r, { x, y, id }])

    setTimeout(() => {
      setRipples(r => r.filter(p => p.id !== id))
    }, 1200)
  }

  return (
    <section
      ref={sectionRef}
      className="services-section"
      onPointerDown={spawnRipple}
    >
      {/* Ripples */}
      <div className="ripples">
        {ripples.map(r => (
          <span
            key={r.id}
            className="ripple"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </div>

      <h2>Services</h2>

      <div
        className="services-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* LEFT LIST */}
        <div className="services-list">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => select(i)}
              className={`service-title ${
                i === index ? "active" : ""
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="services-display">

          {/* IMAGE */}
          <div key={active.id} className="services-image">
            <img
              src={active.image || "https://picsum.photos/900/600"}
              alt={active.title}
              onError={(e) => {
                const target = e.currentTarget
                target.src = "https://picsum.photos/900/600"
              }}
            />
          </div>

          {prev && (
            <div className="services-content exit">
              <ul>
                {prev.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div key={active.id} className="services-content">
            <ul>
              {active.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}