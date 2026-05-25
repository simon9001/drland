"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, HardHat, Droplets, Sprout, Waves, Zap, CheckCircle2 } from "lucide-react";

const SOLUTIONS = [
  {
    id: "solar",
    icon: Sun,
    title: "Solar & Energy Systems",
    tagline: "Achieve true energy independence.",
    description: "We engineer, procure, and construct high-capacity solar PV and battery storage systems for residential, commercial, and industrial applications. Our systems are designed to eliminate grid reliance, reduce operational costs by up to 80%, and provide uninterrupted power for critical operations.",
    features: ["Grid-Tied & Off-Grid Systems", "Hybrid Battery Storage", "Commercial Solar Carports", "24/7 Remote Monitoring"],
    accent: "#FFB547",
    bg: "var(--bg-dark)"
  },
  {
    id: "borehole",
    icon: HardHat,
    title: "Borehole Drilling & Equipping",
    tagline: "Precision drilling for sustainable water.",
    description: "End-to-end groundwater extraction services. We handle geophysical siting, precision drilling up to 200m depth, casing, yield testing, and the installation of both solar and AC submersible pumps.",
    features: ["Geophysical Surveys", "Deep Rock Drilling", "Solar Pump Installation", "Yield & Recovery Testing"],
    accent: "#A78BFA",
    bg: "var(--bg-deep)"
  },
  {
    id: "water-treatment",
    icon: Droplets,
    title: "Water Treatment Solutions",
    tagline: "Industrial-grade purification.",
    description: "Comprehensive water treatment plants engineered to WHO standards. We tackle hard water, heavy metals, bacterial contamination, and industrial wastewater, ensuring safe, clean water for human consumption, agriculture, or manufacturing.",
    features: ["Reverse Osmosis (RO)", "UV Sterilisation", "Ozone Treatment", "Industrial Filtration"],
    accent: "#00C2FF",
    bg: "var(--bg-dark)"
  },
  {
    id: "irrigation",
    icon: Sprout,
    title: "Irrigation Systems",
    tagline: "Smart agricultural water management.",
    description: "Design and deployment of highly efficient irrigation networks. From small-scale drip systems for horticulture to large centre-pivot installations for commercial farming, we optimize water distribution for maximum crop yield.",
    features: ["Drip & Micro-Sprinkler", "Centre Pivot Systems", "Automated Scheduling", "Moisture Sensing Integration"],
    accent: "#00E5A0",
    bg: "var(--bg-deep)"
  },
  {
    id: "pools",
    icon: Waves,
    title: "Swimming Pool Construction",
    tagline: "Luxury pools, precisely engineered.",
    description: "Turnkey design and construction of residential luxury pools, infinity edges, and commercial resort pools. We integrate advanced filtration, automated dosing, and energy-efficient heating systems.",
    features: ["Architectural Design", "Structural Engineering", "Automated Filtration", "Solar Heating Integration"],
    accent: "#38BDF8",
    bg: "var(--bg-dark)"
  },
  {
    id: "consultancy",
    icon: Zap,
    title: "Engineering Consultancy",
    tagline: "Technical expertise for complex projects.",
    description: "Independent engineering advice, project management, and system auditing. We help clients navigate complex infrastructure projects from feasibility studies and specification writing through to final commissioning and certification.",
    features: ["Feasibility Studies", "Energy Auditing", "Project Management", "System Commissioning"],
    accent: "#FB923C",
    bg: "var(--bg-deep)"
  }
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function SolutionsPage() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "7rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        
        <div className="container animate-fadeup" style={{ position: "relative" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Our Expertise</div>
          <h1 style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Engineered For <span className="text-gradient">Performance</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            Discover our comprehensive suite of water and energy infrastructure solutions. 
            Designed to integrate seamlessly and built to endure.
          </p>
        </div>

        {/* Anchor links */}
        <div className="container animate-fadeup delay-200" style={{ marginTop: "4rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
          {SOLUTIONS.map(s => (
            <Link key={s.id} href={`#${s.id}`} style={{
              padding: "0.6rem 1.25rem", borderRadius: "99px",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "0.875rem", fontWeight: 600, color: "var(--text-tertiary)", textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = s.accent; e.currentTarget.style.borderColor = `${s.accent}40`; e.currentTarget.style.background = `${s.accent}10`; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-tertiary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Sections */}
      {SOLUTIONS.map((s, index) => (
        <SolutionSection key={s.id} solution={s} index={index} />
      ))}
    </div>
  );
}

function SolutionSection({ solution, index }: { solution: typeof SOLUTIONS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = solution.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={solution.id} style={{ padding: "var(--section-py) 0", background: solution.bg, position: "relative", overflow: "hidden" }}>
      {/* Divider */}
      {index !== 0 && <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.5 }} />}

      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", [isEven ? "right" : "left"]: "-10%",
        transform: "translateY(-50%)", width: "600px", height: "600px", borderRadius: "50%",
        background: `radial-gradient(circle, ${solution.accent}08 0%, transparent 60%)`,
        pointerEvents: "none", filter: "blur(40px)"
      }} />

      <div className="container" ref={ref} style={{ position: "relative" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center",
          direction: isEven ? "ltr" : "rtl"
        }} className="solution-grid">
          
          {/* Content */}
          <div style={{
            direction: "ltr",
            transform: visible ? "translateY(0)" : "translateY(30px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)"
          }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "16px",
              background: `linear-gradient(135deg, ${solution.accent}15, ${solution.accent}05)`,
              border: `1px solid ${solution.accent}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: solution.accent, marginBottom: "2rem",
              boxShadow: `0 8px 32px ${solution.accent}20`
            }}>
              <Icon size={32} />
            </div>

            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{solution.title}</h2>
            <h4 style={{ color: solution.accent, fontSize: "1.25rem", fontWeight: 500, marginBottom: "1.5rem" }}>{solution.tagline}</h4>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "3rem" }}>
              {solution.description}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "3rem" }}>
              {solution.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9375rem", fontWeight: 500 }}>
                  <CheckCircle2 size={18} color={solution.accent} /> {f}
                </div>
              ))}
            </div>

            <Link href={`/contact?service=${encodeURIComponent(solution.title)}`} className="btn-primary-custom" style={{
              background: `linear-gradient(135deg, ${solution.accent}, ${solution.accent}cc)`,
              boxShadow: `0 8px 24px ${solution.accent}30`
            }}>
              Consult An Engineer <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual Placeholder */}
          <div style={{
            direction: "ltr",
            position: "relative",
            aspectRatio: "4/3",
            borderRadius: "24px",
            background: `linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`,
            border: `1px solid ${solution.accent}20`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
            boxShadow: `0 24px 80px rgba(0,0,0,0.4), 0 0 60px ${solution.accent}10`,
            overflow: "hidden"
          }}>
            <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
            <Icon size={120} color={solution.accent} style={{ opacity: 0.15 }} />
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", padding: "0.75rem 1.25rem", background: "rgba(0,0,0,0.65)", borderRadius: "12px", border: `1px solid ${solution.accent}30`, fontSize: "0.875rem", fontWeight: 600, color: "white" }}>
              {solution.title}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .solution-grid { grid-template-columns: 1fr !important; gap: 4rem !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  );
}
