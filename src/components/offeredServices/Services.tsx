import { useEffect, useRef, useState } from "react";
import { services } from "./ServicesData";
import "../../stylesheets/Services.scss";

export default function Services() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Track which images have been preloaded
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Preload all service images on mount
  useEffect(() => {
    services.forEach((s) => {
      if (!s.image) return;
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [s.id]: true }));
      };
      img.onerror = () => {
        // Mark as loaded even on error to avoid waiting forever
        setLoadedImages((prev) => ({ ...prev, [s.id]: true }));
      };
      img.src = s.image;
    });
  }, []);

  const active = services[index];
  const prev = prevIndex !== null ? services[prevIndex] : null;

  /* =========================
     NAVIGATION
  ========================= */

  function next() {
    setPrevIndex(index);
    setIndex((i) => (i + 1) % services.length);
  }

  function select(i: number) {
    if (i === index) return;
    setPrevIndex(index);
    setIndex(i);
  }

  /* =========================
     AUTO CAROUSEL
  ========================= */

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, index]);

  /* Remove previous after exit animation */
  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => {
      setPrevIndex(null);
    }, 350);
    return () => clearTimeout(t);
  }, [prevIndex]);

  /* =========================
     RIPPLE WAVES
  ========================= */

  function spawnRipple(e: React.PointerEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { x, y, id }]);
    setTimeout(() => {
      setRipples((r) => r.filter((p) => p.id !== id));
    }, 1200);
  }

  return (
    <section
      ref={sectionRef}
      className="services-section"
      onPointerDown={spawnRipple}
    >
      <div className="services-card" ref={cardRef}>
        {/* Ripples inside card */}
        <div className="ripples">
          {ripples.map((r) => (
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
            <div key={`img-${active.id}`} className="services-image">
              {!loadedImages[active.id] && active.image && (
                <div className="image-placeholder">Loading…</div>
              )}
              <img
                src={active.image || "https://picsum.photos/900/600"}
                alt={active.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://picsum.photos/900/600";
                }}
                style={{
                  opacity:
                    loadedImages[active.id] || !active.image ? 1 : 0,
                }}
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [active.id]: true,
                  }))
                }
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

            <div
              key={`content-${active.id}`}
              className="services-content"
            >
              <ul>
                {active.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}