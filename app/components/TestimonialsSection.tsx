"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

/* All accent colors from the design system */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Tafadzwa Moyo",
    role: "Managing Director",
    company: "Agriharvest Zimbabwe",
    rating: 5,
    quote:
      "HIDRACORE transformed our farm operations. The borehole system and solar-powered irrigation they installed handles our entire 200-acre crop programme without a single hiccup. The ROI has been extraordinary.",
    project: "Agricultural Borehole + Solar Irrigation",
    accent: "#0082D6",   /* primary */
    initials: "TM",
  },
  {
    id: 2,
    name: "Sandra Ncube",
    role: "General Manager",
    company: "Horizon Hospitality Group",
    rating: 5,
    quote:
      "The luxury pool construction and water treatment systems HIDRACORE delivered for our 5-star lodge are genuinely world-class. Our guests comment on the water quality every single week.",
    project: "Luxury Pool + Water Treatment",
    accent: "#003D6A",   /* primary-dark */
    initials: "SN",
  },
  {
    id: 3,
    name: "Dr. Emmanuel Chikwanda",
    role: "CEO",
    company: "MedCentral Hospitals",
    rating: 5,
    quote:
      "When load-shedding threatened our critical care units, HIDRACORE stepped in with an 80kW solar hybrid system. We now have 24/7 uninterrupted power. Their engineers are exceptional professionals.",
    project: "Hospital Solar Backup System",
    accent: "#FDB913",   /* yellow */
    initials: "EC",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const { ref, visible } = useReveal();

  const prev = () => {
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
    setAnimKey((k) => k + 1);
  };
  const next = () => {
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
    setAnimKey((k) => k + 1);
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      style={{
        padding: "var(--section-py) 0",
        background: "var(--bg-dark)",
        position: "relative",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            transform: visible ? "translateY(0)" : "translateY(18px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="section-label" style={{ marginBottom: "0.875rem" }}>Client Success Stories</div>
          <h2 style={{ margin: "0 0 0.875rem" }}>
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p style={{ maxWidth: "460px", margin: "0 auto", fontSize: "1rem", color: "var(--text-tertiary)" }}>
            Don't just take our word for it — hear from the businesses and homeowners
            who rely on HIDRACORE infrastructure every day.
          </p>
        </div>

        {/* Single active card — no fixed height hack */}
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div
            key={animKey}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "var(--radius-card)",
              padding: "2.75rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              animation: "fadeInUp 0.4s cubic-bezier(0.23,1,0.32,1) both",
            }}
          >
            {/* Top accent line using design system color */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "3px",
              background: t.accent,
              borderRadius: "var(--radius-card) var(--radius-card) 0 0",
            }} />

            {/* Background quote icon */}
            <Quote
              size={72}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.75rem",
                opacity: 0.05,
                color: t.accent,
              }}
            />

            <div style={{ position: "relative" }}>
              {/* Project badge */}
              <div style={{
                display: "inline-flex",
                padding: "0.3rem 0.75rem",
                borderRadius: "99px",
                background: `${t.accent}10`,
                border: `1px solid ${t.accent}22`,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: t.accent,
                marginBottom: "1.375rem",
              }}>
                {t.project}
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.125rem" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} color="#FDB913" fill="#FDB913" />
                ))}
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: "1.1875rem",
                lineHeight: 1.65,
                color: "var(--text-primary)",
                fontStyle: "italic",
                marginBottom: "2rem",
                fontWeight: 400,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: `${t.accent}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            marginTop: "2rem",
          }}>
            <button
              onClick={prev}
              className="scroll-btn"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAnimKey((k) => k + 1); }}
                  style={{
                    width: i === current ? "24px" : "7px",
                    height: "7px",
                    borderRadius: "99px",
                    border: "none",
                    background: i === current ? "var(--primary)" : "rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="scroll-btn"
              aria-label="Next testimonial"
              style={{ borderColor: "var(--border-primary)", background: "rgba(0,130,214,0.06)", color: "var(--primary)" }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
