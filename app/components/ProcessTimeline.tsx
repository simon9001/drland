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
    accent: "#FDB913",
  },
  {
    id: "design",
    step: "02",
    title: "Custom System Design",
    desc: "We engineer a tailored solution using industry-leading software to guarantee optimal efficiency and ROI.",
    icon: PenTool,
    accent: "#0082D6",
  },
  {
    id: "installation",
    step: "03",
    title: "Professional Installation",
    desc: "Certified technicians install your system with strict adherence to international quality and safety standards.",
    icon: Wrench,
    accent: "#2DC653",
  },
  {
    id: "maintenance",
    step: "04",
    title: "Commissioning & Support",
    desc: "Rigorous testing before handover, backed by proactive maintenance plans and 24/7 technical support.",
    icon: CheckCircle2,
    accent: "#0099FF",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame: number;
    let val = 0;
    function animate() {
      val += 0.6;
      if (val >= 100) { setProgress(100); return; }
      setProgress(val);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: "var(--section-py) 0",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, width: "100%" }} />

      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,130,214,0.03) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{
          textAlign: "center",
          marginBottom: "5rem",
          transform: visible ? "translateY(0)" : "translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <div className="section-label" style={{ marginBottom: "1.25rem", color: "#0082D6" }}>Our Process</div>
          <h2 style={{ margin: "0 0 1rem", color: "#1A2332" }}>
            How We <span className="text-gradient">Work</span>
          </h2>
          <p style={{ maxWidth: "480px", margin: "0 auto", fontSize: "1rem", color: "#718096" }}>
            A structured, transparent process that takes your project from initial
            brief to operational system — without surprises.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "none",
              position: "absolute",
              top: "32px",
              left: "calc(12.5% + 16px)",
              right: "calc(12.5% + 16px)",
              height: "4px",
              background: "rgba(0,0,0,0.08)",
              borderRadius: "4px",
              zIndex: 0,
            }}
            className="timeline-line"
          >
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #0082D6, #2DC653)",
              transition: "width 0.1s linear",
              borderRadius: "4px",
            }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            position: "relative",
            zIndex: 1,
          }} className="steps-grid">
            {STEPS.map((step, i) => {
              const activated = progress >= (i / (STEPS.length - 1)) * 100;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    opacity: visible ? 1 : 0,
                    transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 120}ms`,
                  }}
                >
                  <div style={{ position: "relative", marginBottom: "1.75rem" }}>
                    {activated && (
                      <div style={{
                        position: "absolute",
                        inset: "-8px",
                        borderRadius: "50%",
                        border: `1px solid ${step.accent}50`,
                        animation: "pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite",
                      }} />
                    )}

                    <div style={{
                      width: "64px", height: "64px",
                      borderRadius: "50%",
                      background: activated
                        ? `${step.accent}20`
                        : "#F7FAFC",
                      border: `2px solid ${activated ? step.accent : "#E2E8F0"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: activated ? step.accent : "#A0AEC0",
                      transition: "all 0.5s",
                      boxShadow: activated ? `0 0 24px ${step.accent}30` : "none",
                    }}>
                      <Icon size={28} />
                    </div>
                  </div>

                  <div style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: activated ? step.accent : "#A0AEC0",
                    marginBottom: "0.75rem",
                    transition: "color 0.5s",
                  }}>
                    Step {step.step}
                  </div>

                  <div style={{
                    background: "#FFFFFF",
                    border: `1px solid ${activated ? `${step.accent}20` : "#E2E8F0"}`,
                    borderRadius: "16px",
                    padding: "1.5rem",
                    transition: "all 0.5s",
                    boxShadow: activated ? `0 10px 30px -10px ${step.accent}30` : "0 4px 6px -1px rgba(0,0,0,0.05)",
                  }}>
                    <h4 style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#1A2332",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "0.9375rem", color: "#718096", lineHeight: 1.65, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-line { display: block !important; }
        }
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.5); opacity: 0;   }
          100% { transform: scale(1.5); opacity: 0;   }
        }
      `}</style>
    </section>
  );
}
