"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, HardHat, Droplets, Sprout, Waves, Zap, Activity, Shield } from "lucide-react";

const SERVICES = [
  {
    id: "solar",
    title: "Solar Power Solutions",
    description: "Commercial and residential solar installations, hybrid systems, and battery storage.",
    icon: Sun,
    accent: "#FDB913",
    image: "/solar_panels.png",
  },
  {
    id: "borehole",
    title: "Borehole Drilling & Equipping",
    description: "Professional drilling, pump installation, and complete water system setup.",
    icon: Droplets,
    accent: "#0082D6",
    image: "/image.png",
  },
  {
    id: "water",
    title: "Water Treatment",
    description: "Advanced filtration, purification systems, and chemical supply for safe water.",
    icon: Activity,
    accent: "#0099FF",
    image: "/water_treatment.png",
  },
  {
    id: "irrigation",
    title: "Smart Irrigation",
    description: "Drip lines, overhead sprinklers, and automated agricultural water systems.",
    icon: Droplets,
    accent: "#2DC653",
    image: "/solar_panels.png",
  },
  {
    id: "pools",
    title: "Swimming Pools",
    description: "Design, construction, and maintenance of premium residential and commercial pools.",
    icon: Zap,
    accent: "#0082D6",
    image: "/water_treatment.png",
  },
  {
    id: "consultancy",
    title: "Engineering Consultancy",
    description: "Expert design, planning, and project management for water and energy infrastructure.",
    icon: Shield,
    accent: "#003D6A",
    image: "/image.png",
  },
];

/* Scroll-reveal hook */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/* Single card */
function ServiceCard({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useReveal();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "#ffffff",
        border: "1px solid #E2E8F0",
        borderRadius: "24px",
        padding: 0,
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.08)"
          : "0 4px 12px rgba(0,0,0,0.03)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "24px 24px 0 0",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: service.accent,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
      }} />

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: `${service.accent}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: service.accent,
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Icon size={26} strokeWidth={1.5} />
        </div>

        <h4 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#1A2332",
          marginBottom: "0.75rem",
          position: "relative",
          zIndex: 1,
        }}>
          {service.title}
        </h4>

        <p style={{
          fontSize: "0.95rem",
          color: "#64748B",
          lineHeight: 1.6,
          marginBottom: "2rem",
          flex: 1,
        }}>
          {service.description}
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: service.accent,
            marginTop: "auto",
          }}
        >
          Discover Solution <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="services"
      style={{
        padding: "var(--section-py) 0",
        background: "var(--bg-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "80%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(0,130,214,0.15), transparent)",
      }} />
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "800px", height: "400px",
        borderRadius: "50%",
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
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>What We Do</div>
          <h2 style={{ marginBottom: "1rem" }}>
            Integrated Infrastructure{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p style={{ maxWidth: "520px", margin: "0 auto", fontSize: "1.0625rem" }}>
            From concept to commissioning — we engineer, install and maintain
            water and energy infrastructure that lasts.
          </p>
        </div>

        {/* Bento-style grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto",
          gap: "1.25rem",
        }} className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 80} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/solutions" className="btn-outline-custom">
            View All Solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
