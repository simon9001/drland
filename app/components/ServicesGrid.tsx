"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sun, Droplets, Sprout, Waves, Zap, Shield } from "lucide-react";

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
    icon: Droplets,
    accent: "#0099FF",
    image: "/water_treatment.png",
  },
  {
    id: "irrigation",
    title: "Smart Irrigation",
    description: "Drip lines, overhead sprinklers, and automated agricultural water systems.",
    icon: Sprout,
    accent: "#2DC653",
    image: "/solar_panels.png",
  },
  {
    id: "pools",
    title: "Swimming Pools",
    description: "Design, construction, and maintenance of premium residential and commercial pools.",
    icon: Waves,
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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function ServiceCard({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  const { ref, visible } = useReveal();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        position: "relative",
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s, border-color 0.35s",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "180px", flexShrink: 0 }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: `${service.accent}12`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: service.accent,
          marginBottom: "1.25rem",
        }}>
          <Icon size={22} strokeWidth={1.6} />
        </div>

        <h4 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.625rem",
          lineHeight: 1.25,
        }}>
          {service.title}
        </h4>

        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          flex: 1,
          marginBottom: "1.5rem",
        }}>
          {service.description}
        </p>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: service.accent,
          marginTop: "auto",
        }}>
          Discover Solution <ArrowRight size={14} />
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
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container" style={{ position: "relative" }}>
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
          <div className="section-label" style={{ marginBottom: "1rem" }}>What We Do</div>
          <h2 style={{ margin: "0 0 0.875rem" }}>
            Integrated Infrastructure{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p style={{ maxWidth: "500px", margin: "0 auto", fontSize: "1.0625rem" }}>
            From concept to commissioning — we engineer, install and maintain
            water and energy infrastructure that lasts.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.125rem",
          }}
          className="services-grid"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 70} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/solutions" className="btn-outline-custom">
            View All Solutions <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(0,130,214,0.18) !important;
          box-shadow: 0 12px 36px rgba(0,0,0,0.09) !important;
        }
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
