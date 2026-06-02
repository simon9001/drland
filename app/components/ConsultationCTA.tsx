"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap } from "lucide-react";

const PROMPTS = [
  { id: "solar",     label: "Solar backup for my home" },
  { id: "irrigation",label: "Farm irrigation system" },
  { id: "pool",      label: "Luxury swimming pool" },
  { id: "borehole",  label: "Borehole drilling" },
  { id: "water",     label: "Water treatment plant" },
];

export default function ConsultationCTA() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  return (
    <section
      id="consultation"
      style={{
        padding: "var(--section-py) 0",
        background: "var(--bg-dark)",
        position: "relative",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">
        <div style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,130,214,0.12)",
          borderRadius: "var(--radius-card)",
          padding: "4rem 3rem",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Subtle corner gradient — not an animated blob, just a static hint */}
          <div style={{
            position: "absolute",
            top: 0, right: 0,
            width: "360px", height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,130,214,0.04) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
            pointerEvents: "none",
          }} />

          {/* Icon */}
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background: "rgba(0,130,214,0.07)",
            border: "1px solid rgba(0,130,214,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--primary)",
            margin: "0 auto 2rem",
          }}>
            <Zap size={28} strokeWidth={1.6} />
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "0.875rem", lineHeight: 1.15 }}>
            Ready to upgrade your{" "}
            <span className="text-gradient">infrastructure?</span>
          </h2>

          <p style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            maxWidth: "420px",
            margin: "0 auto 2.25rem",
            lineHeight: 1.6,
          }}>
            Get a comprehensive engineering assessment and tailored project proposal.
          </p>

          {/* Prompt pills */}
          <div style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2.25rem",
          }}>
            {PROMPTS.map((p) => {
              const isActive = selectedPrompt === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPrompt(isActive ? null : p.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "99px",
                    border: `1px solid ${isActive ? "rgba(0,130,214,0.3)" : "rgba(0,0,0,0.09)"}`,
                    background: isActive ? "rgba(0,130,214,0.07)" : "transparent",
                    color: isActive ? "var(--primary)" : "var(--text-secondary)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* CTA button */}
          <Link
            href={`/contact${selectedPrompt ? `?service=${selectedPrompt}` : ""}`}
            className="btn-primary-custom"
            style={{ fontSize: "1rem", padding: "0.9375rem 2rem" }}
          >
            Start Free Consultation <ArrowRight size={17} />
          </Link>

          <div style={{
            marginTop: "1.125rem",
            fontSize: "0.8125rem",
            color: "var(--text-tertiary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}>
            <Shield size={13} color="var(--primary)" />
            Your data is secure and confidential.
          </div>
        </div>
      </div>
    </section>
  );
}
