"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Building2, CheckCircle2 } from "lucide-react";

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
    stat1: { value: "80%",  label: "Cost Reduction" },
    stat2: { value: "25yr", label: "System Lifespan" },
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
    stat1: { value: "180m", label: "Max Drill Depth" },
    stat2: { value: "50k",  label: "L/Day Treatment" },
    image: "/water_treatment.png",
  },
];

const BADGES = [
  { icon: ShieldCheck,  label: "Certified Engineers" },
  { icon: Building2,    label: "Commercial & Residential" },
  { icon: CheckCircle2, label: "End-to-End Delivery" },
];

/* ─── Animated counter ─── */
function Counter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num  = parseFloat(target.replace(/[^0-9.]/g, ""));
        const unit = target.replace(/[0-9.]/g, "");
        let val = 0;
        const steps = 40;
        const inc   = num / steps;
        const timer = setInterval(() => {
          val += inc;
          if (val >= num) { setDisplay(target); clearInterval(timer); }
          else setDisplay((val < 10 ? val.toFixed(1) : Math.floor(val).toString()) + unit);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey,     setAnimKey]     = useState(0);

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
      {/* Subtle atmospheric gradient — single, very light */}
      <div
        className="animate-blob1"
        style={{
          position: "absolute",
          top: "-15%",
          left: "-8%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,130,214,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, padding: "5rem 1.5rem" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
          className="hero-grid"
        >
          {/* ── LEFT ── */}
          <div key={animKey} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            {/* Eyebrow */}
            <div className="section-label animate-fadeup">
              {banner.eyebrow}
            </div>

            {/* Headline */}
            <h1
              className="animate-fadeup"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.75rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                margin: 0,
                animationDelay: "60ms",
              }}
            >
              {banner.title}
              <span className="text-gradient">{banner.highlight}</span>
              {banner.suffix}
            </h1>

            {/* Description */}
            <p
              className="animate-fadeup"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "460px",
                margin: 0,
                animationDelay: "120ms",
              }}
            >
              {banner.description}
            </p>

            {/* CTAs */}
            <div
              className="animate-fadeup"
              style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", animationDelay: "180ms" }}
            >
              <Link href="/contact" className="btn-primary-custom">
                Request Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" className="btn-outline-custom">
                Explore Solutions
              </Link>
            </div>

            {/* Trust badges */}
            <div
              className="animate-fadeup"
              style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", animationDelay: "240ms" }}
            >
              {BADGES.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-tertiary)",
                    }}
                  >
                    <Icon size={13} color="var(--primary)" />
                    {b.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE STATS ROW — shown only on mobile ── */}
          <div className="hero-stats-mobile" style={{ display: "none" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginTop: "-0.5rem",
            }}>
              {[banner.stat1, banner.stat2].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#F5F7FA",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, color: i === 0 ? "var(--primary)" : "var(--emerald)", lineHeight: 1 }}>
                    <Counter target={stat.value} />
                  </div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-tertiary)", marginTop: "0.25rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — image + floating stats ── */}
          <div
            className="animate-fadeup"
            style={{ position: "relative", animationDelay: "100ms" }}
          >
            {/* Image card */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.10)",
                aspectRatio: "16/10",
              }}
            >
              {BANNERS.map((b, i) => (
                <Image
                  key={b.id}
                  src={b.image}
                  alt={b.highlight}
                  fill
                  priority={i === 0}
                  style={{
                    objectFit: "cover",
                    opacity: activeIndex === i ? 1 : 0,
                    transition: "opacity 0.9s ease",
                  }}
                />
              ))}
              {/* Subtle bottom fade */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 40%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Carousel dots — below the image */}
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
              {BANNERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); setAnimKey((k) => k + 1); }}
                  style={{
                    height: "3px",
                    width: activeIndex === i ? "24px" : "8px",
                    borderRadius: "99px",
                    border: "none",
                    background: activeIndex === i ? "var(--primary)" : "rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Floating stat — bottom left */}
            <div
              className="animate-float hero-stat"
              style={{
                position: "absolute",
                bottom: "2.25rem",
                left: "-1.75rem",
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "14px",
                padding: "0.875rem 1.125rem",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--primary)",
                lineHeight: 1,
              }}>
                <Counter target={banner.stat1.value} />
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--text-tertiary)", marginTop: "0.2rem" }}>
                {banner.stat1.label}
              </div>
            </div>

            {/* Floating stat — top right */}
            <div
              className="animate-float hero-stat"
              style={{
                position: "absolute",
                top: "-1rem",
                right: "-1.5rem",
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "14px",
                padding: "0.875rem 1.125rem",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                animationDelay: "1.5s",
              }}
            >
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--emerald)",
                lineHeight: 1,
              }}>
                <Counter target={banner.stat2.value} />
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--text-tertiary)", marginTop: "0.2rem" }}>
                {banner.stat2.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }

        /* Hide floating stat cards on mobile — negative margins overflow viewport */
        .hero-stat { display: block; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stat { display: none !important; }
          .hero-stats-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
