"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sun, HardHat, Droplets, Sprout, Waves, ClipboardList,
  FlaskConical, Zap, Gauge, Network, Cpu, ToggleRight,
} from "lucide-react";

/* ── Core engineering services ── */
const CORE = [
  {
    id: "solar",
    title: "Solar Power Solutions",
    description: "Grid-tied, hybrid and off-grid solar installations for homes, farms, and commercial facilities. We handle design, supply, and installation.",
    icon: Sun,
    href: "/services/solar",
  },
  {
    id: "borehole",
    title: "Borehole Drilling & Equipping",
    description: "Site survey, geological assessment, drilling, casing, pump selection and full commissioning. Domestic through to industrial yields.",
    icon: HardHat,
    href: "/services/borehole",
  },
  {
    id: "water",
    title: "Water Treatment & Design",
    description: "Reverse osmosis, UV, filtration and chemical dosing systems designed for your water source and consumption profile.",
    icon: Droplets,
    href: "/services/water-treatment",
  },
  {
    id: "irrigation",
    title: "Irrigation Systems",
    description: "Drip irrigation, overhead sprinklers, and automated scheduling for agricultural and landscaping applications.",
    icon: Sprout,
    href: "/services/irrigation",
  },
  {
    id: "pools",
    title: "Swimming Pool Design & Construction",
    description: "End-to-end pool projects — structural design, excavation, plumbing, filtration, and finishing for residential and commercial sites.",
    icon: Waves,
    href: "/services/pools",
  },
  {
    id: "consultancy",
    title: "Engineering Consultancy",
    description: "Feasibility studies, technical audits, project management, and compliance certification for water and energy infrastructure.",
    icon: ClipboardList,
    href: "/services/consultancy",
  },
];

/* ── Supply & equipment — what we source and supply on every project ── */
const SUPPLY = [
  { id: "chemicals",   label: "Chemical Supply",     desc: "Water treatment and pool chemicals",       icon: FlaskConical },
  { id: "inverters",   label: "Inverters",            desc: "Solar inverters and hybrid units",         icon: Zap          },
  { id: "pumping",     label: "Pumping Systems",      desc: "Submersible, surface and booster pumps",  icon: Gauge        },
  { id: "pipes",       label: "Pipes & Fittings",     desc: "HDPE, uPVC, and galvanised pipework",     icon: Network      },
  { id: "electronics", label: "Electronics",          desc: "Sensors, controllers and automation",     icon: Cpu          },
  { id: "breakers",    label: "Circuit Breakers",     desc: "MCBs, RCDs and distribution boards",      icon: ToggleRight  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function CoreCard({ svc, delay }: { svc: typeof CORE[0]; delay: number }) {
  const { ref, visible } = useReveal();
  const Icon = svc.icon;

  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={svc.href}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1.75rem",
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "14px",
        textDecoration: "none",
        transition: "border-color 0.22s, box-shadow 0.22s",
        transform: visible ? "translateY(0)" : "translateY(18px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        cursor: "pointer",
      }}
      className="core-card"
    >
      {/* Icon */}
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        background: "rgba(0,130,214,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--primary)",
        marginBottom: "1.25rem",
        flexShrink: 0,
      }}>
        <Icon size={22} strokeWidth={1.6} />
      </div>

      <h4 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "1.0625rem",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginBottom: "0.625rem",
        lineHeight: 1.3,
      }}>
        {svc.title}
      </h4>

      <p style={{
        fontSize: "0.9rem",
        color: "var(--text-secondary)",
        lineHeight: 1.65,
        flex: 1,
        marginBottom: "1.375rem",
      }}>
        {svc.description}
      </p>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "var(--primary)",
      }}>
        Learn more <ArrowRight size={14} />
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: supplyRef, visible: supplyVisible } = useReveal();

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

      <div className="container">

        {/* ── Section header ── */}
        <div
          ref={headRef}
          style={{
            marginBottom: "3rem",
            transform: headVisible ? "translateY(0)" : "translateY(16px)",
            opacity: headVisible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: "0.875rem" }}>What We Do</div>
            <h2 style={{ margin: "0 0 1rem" }}>
              Engineering services,{" "}
              <span className="text-gradient">supply and installation.</span>
            </h2>
            <p style={{ maxWidth: "560px", margin: "0 auto 1.5rem", fontSize: "1.0625rem", color: "var(--text-secondary)" }}>
              From feasibility through to handover — we design the system, supply every component, and complete the installation ourselves. No subcontractors.
            </p>
            <Link href="/services" className="btn-outline-custom">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Core services — 3-column icon cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "3rem",
          }}
          className="core-grid"
        >
          {CORE.map((svc, i) => (
            <CoreCard key={svc.id} svc={svc} delay={i * 65} />
          ))}
        </div>

        {/* ── Supply & Equipment strip ── */}
        <div
          ref={supplyRef}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "14px",
            padding: "2rem",
            transform: supplyVisible ? "translateY(0)" : "translateY(16px)",
            opacity: supplyVisible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "0.375rem" }}>
              Supply & Equipment
            </div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", margin: 0 }}>
              We source and supply every component used in our projects — no third-party markups, correctly specified for your system.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "0",
            }}
            className="supply-grid"
          >
            {SUPPLY.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "1rem",
                    borderRight: i < SUPPLY.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                  className="supply-item"
                >
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "9px",
                    background: "rgba(0,0,0,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    marginBottom: "0.75rem",
                    flexShrink: 0,
                  }}>
                    <Icon size={17} strokeWidth={1.6} />
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", lineHeight: 1.4 }}>
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .core-card:hover {
          border-color: rgba(0,130,214,0.22) !important;
          box-shadow: 0 8px 28px rgba(0,0,0,0.07) !important;
        }
        @media (max-width: 1024px) {
          .core-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .supply-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .supply-item:nth-child(3) { border-right: none !important; }
          .supply-item:nth-child(3) ~ .supply-item { border-top: 1px solid rgba(0,0,0,0.06); }
        }
        @media (max-width: 640px) {
          .core-grid   { grid-template-columns: 1fr !important; }
          .supply-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .supply-item { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.06); }
          .supply-item:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
