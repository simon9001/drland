"use client";

import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Wrench, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    id: "consultation",
    step: "01",
    title: "Site Assessment & Consultation",
    desc: "Our engineers conduct comprehensive on-site analysis, understanding your specific water or energy requirements.",
    icon: Search,
  },
  {
    id: "design",
    step: "02",
    title: "Custom System Design",
    desc: "We engineer a tailored solution using industry-leading software to guarantee optimal efficiency and ROI.",
    icon: PenTool,
  },
  {
    id: "installation",
    step: "03",
    title: "Professional Installation",
    desc: "Certified technicians install your system with strict adherence to international quality and safety standards.",
    icon: Wrench,
  },
  {
    id: "maintenance",
    step: "04",
    title: "Commissioning & Support",
    desc: "Rigorous testing before handover, backed by proactive maintenance plans and 24/7 technical support.",
    icon: CheckCircle2,
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible,   setVisible]   = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: "var(--section-py) 0",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "4.5rem",
          transform: visible ? "translateY(0)" : "translateY(18px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <div className="section-label" style={{ marginBottom: "0.875rem" }}>Our Process</div>
          <h2 style={{ margin: "0 0 0.875rem" }}>
            How We <span className="text-gradient">Work</span>
          </h2>
          <p style={{ maxWidth: "460px", margin: "0 auto", fontSize: "1rem", color: "var(--text-tertiary)" }}>
            A structured, transparent process that takes your project from initial
            brief to operational system — without surprises.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="steps-grid"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transform: visible ? "translateY(0)" : "translateY(22px)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.45s cubic-bezier(0.23,1,0.32,1) ${i * 90}ms, opacity 0.45s ease ${i * 90}ms`,
                }}
              >
                {/* Step number + icon */}
                <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(0,130,214,0.07)",
                    border: "1px solid rgba(0,130,214,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}>
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    opacity: 0.6,
                  }}>
                    Step {step.step}
                  </span>
                </div>

                {/* Card */}
                <div style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.375rem",
                  flex: 1,
                }}>
                  <h4 style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.625rem",
                    lineHeight: 1.35,
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
