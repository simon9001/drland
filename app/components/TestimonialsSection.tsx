"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowLeft, ArrowRight } from "lucide-react";

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
    accent: "#00E5A0",
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
    accent: "#38BDF8",
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
    accent: "#FFB547",
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
  const { ref, visible } = useReveal();

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonials"
      style={{
        padding: "var(--section-py) 0",
        background: "#F5F7FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%",
        transform: "translateX(-50%)",
        width: "800px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,130,214,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem", color: "#0082D6" }}>Client Success Stories</div>
          <h2 style={{ margin: "0 0 1rem", color: "#1A2332" }}>
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p style={{ maxWidth: "480px", margin: "0 auto", fontSize: "1rem", color: "#718096" }}>
            Don't just take our word for it. Hear from the businesses and homeowners
            who rely on Hidracore infrastructure every day.
          </p>
        </div>

        {/* Main testimonial */}
        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", height: "450px" }}>
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === current;
            const isPrev = i === (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
            
            return (
              <div
                key={t.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#FFFFFF",
                  border: `1px solid ${t.accent}15`,
                  borderRadius: "24px",
                  padding: "3.5rem 3rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0) scale(1)" : isPrev ? "translateX(-15%) scale(0.95)" : "translateX(15%) scale(0.95)",
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 10 : 0,
                  boxShadow: isActive ? "0 16px 60px rgba(0,0,0,0.08)" : "none",
                }}
              >
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />

                <Quote size={64} style={{ position: "absolute", top: "2rem", right: "2rem", opacity: 0.1, color: t.accent }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Project badge */}
                  <div style={{
                    display: "inline-flex",
                    padding: "0.35rem 0.875rem",
                    borderRadius: "99px",
                    background: `${t.accent}12`,
                    border: `1px solid ${t.accent}25`,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: t.accent,
                    marginBottom: "1.5rem",
                  }}>
                    {t.project}
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} color="#FFB547" fill="#FFB547" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: "1.25rem",
                    lineHeight: 1.6,
                    color: "#2D3748",
                    fontStyle: "italic",
                    marginBottom: "2rem",
                    flex: 1,
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.accent}, ${t.accent}80)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.25rem", fontWeight: 700, color: "white",
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#1A2332" }}>{t.name}</div>
                      <div style={{ fontSize: "0.875rem", color: "#718096" }}>{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginTop: "480px" }}>
            <button
              onClick={prev}
              style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.03)",
                color: "#4A5568", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.08)"; e.currentTarget.style.color = "#1A2332"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.03)"; e.currentTarget.style.color = "#4A5568"; }}
            >
              <ArrowLeft size={20} />
            </button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "99px",
                    border: "none",
                    background: i === current ? "#0082D6" : "#CBD5E0",
                    cursor: "pointer",
                    transition: "all 0.35s",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: "1px solid rgba(0,130,214,0.2)", background: "rgba(0,130,214,0.08)",
                color: "#0082D6", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0082D6"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,130,214,0.08)"; e.currentTarget.style.color = "#0082D6"; }}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
