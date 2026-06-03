"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, PenTool, Package, Wrench, ClipboardCheck, Headphones } from "lucide-react";

const STEPS = [
  {
    id: "assessment",
    step: "01",
    title: "Site Assessment",
    desc: "Our engineers visit your site, survey the conditions, and document exactly what your water or energy system needs. Nothing is assumed.",
    icon: MapPin,
  },
  {
    id: "design",
    step: "02",
    title: "Engineering Design",
    desc: "We produce a full technical design — drawings, specifications, and a bill of quantities — tailored to your site and budget.",
    icon: PenTool,
  },
  {
    id: "supply",
    step: "03",
    title: "Equipment Supply",
    desc: "We source and supply every component ourselves: pumps, inverters, pipes, chemicals, electronics. Correctly specified, no substitutions.",
    icon: Package,
  },
  {
    id: "installation",
    step: "04",
    title: "Professional Installation",
    desc: "Our certified technicians complete the installation to design specification, adhering to local regulations and international standards.",
    icon: Wrench,
  },
  {
    id: "commissioning",
    step: "05",
    title: "Commissioning & Testing",
    desc: "Every system is rigorously tested before handover. We don't sign off until the system performs to its designed output.",
    icon: ClipboardCheck,
  },
  {
    id: "support",
    step: "06",
    title: "Ongoing Support",
    desc: "Maintenance contracts, scheduled servicing, emergency call-outs and system audits keep your infrastructure running long-term.",
    icon: Headphones,
  },
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

export default function ProcessTimeline() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();

  return (
    <section
      id="process"
      style={{ padding: "var(--section-py) 0", background: "#FFFFFF", position: "relative" }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            transform: headVisible ? "translateY(0)" : "translateY(16px)",
            opacity: headVisible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="section-label" style={{ marginBottom: "0.875rem" }}>Our Process</div>
          <h2 style={{ margin: "0 0 0.875rem" }}>
            Site to switch-on — <span className="text-gradient">six clear steps.</span>
          </h2>
          <p style={{ maxWidth: "480px", margin: "0 auto", fontSize: "1rem", color: "var(--text-tertiary)" }}>
            A transparent process with no surprises. Every stage is managed in-house by our engineers.
          </p>
        </div>

        {/* 3 × 2 grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="steps-grid"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                style={{
                  padding: "1.625rem",
                  background: "var(--bg-dark)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "14px",
                  transform: gridVisible ? "translateY(0)" : "translateY(18px)",
                  opacity: gridVisible ? 1 : 0,
                  transition: `all 0.45s cubic-bezier(0.23,1,0.32,1) ${i * 65}ms`,
                }}
              >
                {/* Step number + icon row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "rgba(0,130,214,0.12)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}>
                    {step.step}
                  </span>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}>
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                </div>

                <h4 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-tertiary)",
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
