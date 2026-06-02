"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BANNERS = [
  {
    id: 1,
    eyebrow: "Infrastructure Solutions Leader",
    title: "Engineering Water &",
    highlight: " Energy Infrastructure",
    suffix: " For The Future",
    description:
      "Integrated solutions in solar power, borehole systems, water treatment, irrigation, pool construction and engineering consultancy.",
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
    image: "/water_treatment.png",
  },
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12MW", label: "Solar Installed"    },
  { value: "15+",  label: "Years Experience"   },
];

function Counter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const num  = parseFloat(target.replace(/[^0-9.]/g, ""));
        const unit = target.replace(/[0-9.]/g, "");
        let val = 0;
        const steps = 40;
        const inc   = num / steps;
        const t = setInterval(() => {
          val += inc;
          if (val >= num) { setDisplay(target); clearInterval(t); }
          else setDisplay((val < 10 ? val.toFixed(1) : Math.floor(val).toString()) + unit);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function HeroSection() {
  const [active,  setActive]  = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % BANNERS.length);
      setAnimKey((k) => k + 1);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const banner = BANNERS[active];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Background images */}
      {BANNERS.map((b, i) => (
        <Image
          key={b.id}
          src={b.image}
          alt=""
          fill
          priority={i === 0}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: active === i ? 1 : 0,
            transition: "opacity 1.4s ease",
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,10,25,0.90) 0%, rgba(0,10,25,0.60) 50%, rgba(0,10,25,0.30) 100%)",
        zIndex: 1,
      }} />

      {/* Content — pinned to bottom of section */}
      <div className="container" style={{ position: "relative", zIndex: 10, paddingBottom: "4rem" }}>

        {/* Text block */}
        <div key={animKey} style={{ maxWidth: "720px", marginBottom: "3rem" }}>

          {/* Eyebrow */}
          <div
            className="animate-fadeup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ width: "28px", height: "2px", background: "#FDB913", display: "inline-block", borderRadius: "2px" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
              {banner.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fadeup"
            style={{
              color: "#FFFFFF",
              margin: "0 0 1.25rem",
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              animationDelay: "60ms",
            }}
          >
            {banner.title}
            <span style={{ color: "#FDB913" }}>{banner.highlight}</span>
            {banner.suffix}
          </h1>

          {/* Description */}
          <p
            className="animate-fadeup"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              margin: "0 0 2rem",
              maxWidth: "560px",
              animationDelay: "110ms",
            }}
          >
            {banner.description}
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeup"
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", animationDelay: "160ms" }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: "10px",
                background: "var(--primary)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,130,214,0.45)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#006BB5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Request Consultation <ArrowRight size={15} />
            </Link>
            <Link
              href="/solutions"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Bottom row — stats + dots */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.10)",
        }}>
          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {STATS.map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}>
                  <Counter target={stat.value} />
                </div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div style={{ display: "flex", gap: "0.5rem", paddingBottom: "0.25rem" }}>
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setAnimKey((k) => k + 1); }}
                style={{
                  height: "3px",
                  width: active === i ? "28px" : "8px",
                  borderRadius: "99px",
                  border: "none",
                  background: active === i ? "white" : "rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  transition: "all 0.32s",
                  padding: 0,
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
