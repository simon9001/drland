"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Zap, HardHat, Droplets, Sprout, Waves,
  Settings, PenTool, Lightbulb, CheckCircle2, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    id: "energy-solar",
    icon: Zap,
    title: "Energy & Solar Power Solutions",
    description: "Comprehensive solar power solutions including solar backup, grid isolation, inverters, pumping, and breakers.",
    accent: "#FFB547",
    bg: "var(--bg-dark)"
  },
  {
    id: "borehole",
    icon: HardHat,
    title: "Borehole Drilling & Equipping",
    description: "End-to-end borehole drilling, equipping, and sustainable groundwater extraction services.",
    accent: "#A78BFA",
    bg: "var(--bg-deep)"
  },
  {
    id: "water-pools",
    icon: Waves,
    title: "Water Treatment & Swimming Pools",
    description: "Advanced water treatment systems and professional design and construction of swimming pools.",
    accent: "#00C2FF",
    bg: "var(--bg-dark)"
  },
  {
    id: "chemicals",
    icon: Droplets,
    title: "Supply of Chemicals",
    description: "Reliable supply of high-quality chemicals for water treatment, pools, and industrial applications.",
    accent: "#38BDF8",
    bg: "var(--bg-deep)"
  },
  {
    id: "irrigation",
    icon: Sprout,
    title: "Irrigation Systems",
    description: "Precision irrigation solutions including drip irrigation and overhead irrigation sprinklers.",
    accent: "#00E5A0",
    bg: "var(--bg-dark)"
  },
  {
    id: "pipes-fittings",
    icon: Settings,
    title: "Pipes & Fittings",
    description: "Supply and installation of durable pipes and fittings for various plumbing and infrastructural needs.",
    accent: "#94A3B8",
    bg: "var(--bg-deep)"
  },
  {
    id: "electronics",
    icon: Lightbulb,
    title: "Electronics & Components",
    description: "Provision of essential electronics, inverters, breakers, and related electrical hardware.",
    accent: "#F43F5E",
    bg: "var(--bg-dark)"
  },
  {
    id: "consultancy",
    icon: PenTool,
    title: "Engineering Consultancy",
    description: "Expert engineering consultancy specializing in comprehensive water and energy solutions.",
    accent: "#FB923C",
    bg: "var(--bg-deep)"
  }
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero Section */}
      <section style={{
        padding: "6rem 0 4rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        
        <div className="container animate-fadeup" style={{ position: "relative" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Our Services</div>
          <h1 style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Comprehensive <span className="text-gradient">Solutions</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            Explore our wide range of professional services tailored for the water, energy, and engineering sectors.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: "5rem 0", background: "var(--bg-deep)", position: "relative" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.id} service={s} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "5rem 0", background: "var(--bg-dark)", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Ready to start your project?</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Contact us today for a consultation on any of our engineering, water, or energy services.
          </p>
          <Link href="/contact" className="btn-primary-custom" style={{
            background: `linear-gradient(135deg, #0082D6, #00C2FF)`,
            boxShadow: `0 8px 24px rgba(0, 194, 255, 0.3)`,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 2rem",
            borderRadius: "8px",
            fontWeight: 600,
            color: "white",
            textDecoration: "none"
          }}>
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, delay }: { service: typeof SERVICES[0], delay: number }) {
  const { ref, visible } = useReveal();
  const Icon = service.icon;

  return (
    <div ref={ref} style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "16px",
      padding: "2rem",
      transform: visible ? "translateY(0)" : "translateY(20px)",
      opacity: visible ? 1 : 0,
      transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      position: "relative",
      overflow: "hidden"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      e.currentTarget.style.borderColor = `rgba(255,255,255,0.1)`;
      e.currentTarget.style.boxShadow = `0 10px 40px ${service.accent}15`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(20px)";
      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
      e.currentTarget.style.boxShadow = "none";
    }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "150px", height: "150px",
        background: `radial-gradient(circle, ${service.accent}20 0%, transparent 70%)`,
        filter: "blur(20px)", pointerEvents: "none",
        transform: "translate(30%, -30%)"
      }} />

      <div style={{
        width: "56px", height: "56px", borderRadius: "12px",
        background: `linear-gradient(135deg, ${service.accent}15, ${service.accent}05)`,
        border: `1px solid ${service.accent}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: service.accent
      }}>
        <Icon size={28} />
      </div>

      <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
        {service.title}
      </h3>
      
      <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0, flex: 1 }}>
        {service.description}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: service.accent, fontSize: "0.875rem", fontWeight: 600, marginTop: "0.5rem" }}>
        <span>Learn more</span> <ArrowRight size={14} />
      </div>
    </div>
  );
}
