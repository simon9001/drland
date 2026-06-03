"use client";

import { useEffect, useRef, useState } from "react";
import { PackageCheck, Users, ShieldCheck, Headphones } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: PackageCheck,
    title: "We supply what we design",
    body: "Every inverter, pump, chemical, and pipe used on your project is sourced and supplied by us. Right component, correctly specified — no third-party markups, no substitutions.",
  },
  {
    icon: Users,
    title: "End-to-end accountability",
    body: "One contract, one point of contact. Our engineers own every stage from the initial site visit through to final sign-off. If something needs fixing, we fix it — no finger-pointing.",
  },
  {
    icon: ShieldCheck,
    title: "Certified engineering standards",
    body: "All design, installation, and commissioning work is carried out by qualified, certified engineers. Our projects comply with local regulations and international engineering standards.",
  },
  {
    icon: Headphones,
    title: "Support after handover",
    body: "We offer maintenance contracts, scheduled servicing, emergency call-outs, and system audits. Your infrastructure keeps running long after the project is closed.",
  },
];

const METRICS = [
  { value: "15+",     label: "Years in operation"         },
  { value: "500+",    label: "Projects commissioned"      },
  { value: "Zimbabwe‑wide", label: "Service coverage"    },
  { value: "In-house", label: "Engineering & supply team" },
];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function WhyUsSection() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();
  const { ref: metRef,  visible: metVisible  } = useReveal();

  return (
    <section
      id="why-us"
      style={{ padding: "var(--section-py) 0", background: "#FFFFFF", position: "relative" }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          style={{
            maxWidth: "600px",
            marginBottom: "3.5rem",
            transform: headVisible ? "translateY(0)" : "translateY(16px)",
            opacity: headVisible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: "0.875rem" }}>Why HIDRACORE</div>
            <h2 style={{ margin: "0 0 1rem" }}>
              The only team you'll need.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 auto", maxWidth: "560px" }}>
              Most contractors consult, then hand off. We don't. Our engineers assess, design, supply every component, install, commission, and test — before we hand over the keys.
            </p>
          </div>
        </div>

        {/* 4 differentiator cards */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            marginBottom: "3rem",
          }}
          className="why-grid"
        >
          {DIFFERENTIATORS.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.75rem",
                  background: "var(--bg-dark)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "14px",
                  transform: gridVisible ? "translateY(0)" : "translateY(18px)",
                  opacity: gridVisible ? 1 : 0,
                  transition: `all 0.45s cubic-bezier(0.23,1,0.32,1) ${i * 70}ms`,
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}>
                    {d.title}
                  </h4>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {d.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics strip */}
        <div
          ref={metRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            transform: metVisible ? "translateY(0)" : "translateY(14px)",
            opacity: metVisible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1) 0.15s",
          }}
          className="metrics-strip"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              style={{
                padding: "1.75rem 1.5rem",
                borderRight: i < METRICS.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}
              className="metric-item"
            >
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.625rem",
                fontWeight: 800,
                color: "var(--primary)",
                lineHeight: 1,
                marginBottom: "0.3rem",
                letterSpacing: "-0.02em",
              }}>
                {m.value}
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", fontWeight: 500 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid      { grid-template-columns: 1fr !important; }
          .metrics-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .metric-item:nth-child(2) { border-right: none !important; }
          .metric-item:nth-child(3), .metric-item:nth-child(4) { border-top: 1px solid rgba(0,0,0,0.07); }
        }
        @media (max-width: 640px) {
          .metrics-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
