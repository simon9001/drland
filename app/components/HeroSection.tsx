"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, CheckCircle2, ChevronRight } from "lucide-react";

/* ─── Data ─── */
const BANNERS = [
  {
    id: 1,
    eyebrow: "Infrastructure Solutions Leader",
    title: "Engineering Water &",
    highlight: " Energy Infrastructure",
    suffix: " For The Future",
    description:
      "Integrated solutions in solar power, borehole systems, water treatment, irrigation, pumping, pool construction and engineering consultancy.",
    stat1: { value: "500+", label: "Projects Completed" },
    stat2: { value: "12MW",  label: "Solar Installed" },
    image: "/image.png",
  },
  {
    id: 2,
    eyebrow: "Commercial & Industrial Energy",
    title: "Achieve Energy",
    highlight: " Independence",
    suffix: " With Solar",
    description:
      "High-capacity commercial solar and battery storage solutions that eliminate grid dependence and slash operational costs.",
    stat1: { value: "80%",   label: "Cost Reduction" },
    stat2: { value: "25yr",  label: "System Lifespan" },
    image: "/solar_panels.png",
  },
  {
    id: 3,
    eyebrow: "Borehole & Water Treatment",
    title: "Advanced Water",
    highlight: " Infrastructure",
    suffix: " At Any Scale",
    description:
      "From deep borehole drilling to industrial-grade purification — reliable water infrastructure for residential, agricultural and industrial use.",
    stat1: { value: "180m",  label: "Max Drill Depth" },
    stat2: { value: "50k",   label: "L/Day Treatment" },
    image: "/water_treatment.png",
  },
];

const BADGES = [
  { icon: ShieldCheck,   label: "Certified Engineers" },
  { icon: Building2,     label: "Commercial & Residential" },
  { icon: CheckCircle2,  label: "End-to-End Delivery" },
];

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseFloat(target.replace(/[^0-9.]/g, ""));
        const unit = target.replace(/[0-9.]/g, "");
        let start = 0;
        const steps = 40;
        const inc = num / steps;
        const timer = setInterval(() => {
          start += inc;
          if (start >= num) {
            setDisplay(target);
            clearInterval(timer);
          } else {
            setDisplay((start < 10 ? start.toFixed(1) : Math.floor(start).toString()) + unit);
          }
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ─── Component ─── */
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % BANNERS.length);
      setAnimKey((k) => k + 1);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const banner = BANNERS[activeIndex];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#FFFFFF",
        paddingTop: "72px",
      }}
    >
      {/* ── Atmospheric gradient blobs ── */}
      <div
        className="animate-blob1"
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,130,214,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        className="animate-blob2"
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,198,83,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* ── Grid pattern overlay removed as requested ── */}

      {/* ── Content ── */}
      <div className="container" style={{ position: "relative", zIndex: 10, padding: "5rem 1.5rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div key={animKey} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* Eyebrow */}
            <div className="section-label animate-fadeup" style={{ width: "max-content" }}>
              <span
                style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0082D6", display: "inline-block" }}
              />
              {banner.eyebrow}
            </div>

            {/* Headline */}
            <h1
              className="animate-fadeup delay-100"
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#1A2332",
                margin: 0,
              }}
            >
              {banner.title}
              <span className="text-gradient">{banner.highlight}</span>
              {banner.suffix}
            </h1>

            {/* Description */}
            <p
              className="animate-fadeup delay-200"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#4A5568",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              {banner.description}
            </p>



            {/* CTAs */}
            <div className="animate-fadeup delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary-custom">
                Request Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-outline-custom">
                Explore Solutions
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fadeup delay-400" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {BADGES.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: 500, color: "#718096" }}>
                    <Icon size={14} color="#0082D6" />
                    {b.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — image + stats */}
          <div className="animate-fadein delay-200" style={{ position: "relative" }}>
            {/* Image card */}
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                aspectRatio: "16/10",
              }}
            >
              {BANNERS.map((b, i) => (
                <img
                  key={b.id}
                  src={b.image}
                  alt={b.highlight}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: activeIndex === i ? 1 : 0,
                    transition: "opacity 1s ease",
                  }}
                />
              ))}
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }} />

              {/* Carousel dots */}
              <div style={{
                position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: "0.5rem", zIndex: 5,
              }}>
                {BANNERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i); setAnimKey((k) => k + 1); }}
                    style={{
                      height: "4px",
                      width: activeIndex === i ? "28px" : "8px",
                      borderRadius: "99px",
                      border: "none",
                      background: activeIndex === i ? "#0082D6" : "rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      transition: "all 0.35s",
                      padding: 0,
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-2rem",
                background: "#FFFFFF",
                border: "1px solid rgba(0,130,214,0.15)",
                borderRadius: "16px",
                padding: "1rem 1.25rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.625rem", fontWeight: 800, color: "#0082D6", lineHeight: 1 }}>
                <Counter target={banner.stat1.value} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#718096", marginTop: "0.25rem" }}>
                {banner.stat1.label}
              </div>
            </div>

            <div
              className="animate-float delay-300"
              style={{
                position: "absolute",
                top: "-1.25rem",
                right: "-1.5rem",
                background: "#FFFFFF",
                border: "1px solid rgba(0,130,214,0.15)",
                borderRadius: "16px",
                padding: "1rem 1.25rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.625rem", fontWeight: 800, color: "#2DC653", lineHeight: 1 }}>
                <Counter target={banner.stat2.value} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#718096", marginTop: "0.25rem" }}>
                {banner.stat2.label}
              </div>
            </div>

            {/* Next slide hint */}
            <button
              onClick={() => { setActiveIndex((i) => (i + 1) % BANNERS.length); setAnimKey((k) => k + 1); }}
              style={{
                position: "absolute",
                right: "-1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px", height: "36px",
                borderRadius: "50%",
                background: "rgba(0,130,214,0.1)",
                border: "1px solid rgba(0,130,214,0.25)",
                color: "#0082D6",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>


      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        .show-mobile-hero {
          display: none;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .show-mobile-hero {
            display: flex;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
