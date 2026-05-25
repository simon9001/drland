"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Shield } from "lucide-react";

const PROMPTS = [
  { id: "solar", label: "Solar backup for my home" },
  { id: "irrigation", label: "Farm irrigation system" },
  { id: "pool", label: "Luxury swimming pool" },
  { id: "borehole", label: "Borehole drilling" },
  { id: "water", label: "Water treatment plant" },
];

export default function ConsultationCTA() {
  const [active, setActive] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  return (
    <section
      id="consultation"
      style={{
        padding: "var(--section-py) 0",
        background: "#F5F7FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(0,130,214,0.15), transparent)"
      }} />

      {/* Atmospheric blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,130,214,0.04) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", right: "-10%",
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,198,83,0.03) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid rgba(0,130,214,0.15)",
            borderRadius: "24px",
            padding: "4rem 3rem",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Corner accent dots */}
          <svg style={{ position: "absolute", top: "2rem", left: "2rem", opacity: 0.1, pointerEvents: "none" }} width="40" height="40" viewBox="0 0 40 40">
            <pattern id="dots2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0082D6" />
            </pattern>
            <rect x="0" y="0" width="40" height="40" fill="url(#dots2)" />
          </svg>

          <div style={{ position: "relative" }}>
            {/* Icon */}
            <div style={{
              width: "72px", height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(0,130,214,0.10), rgba(0,130,214,0.04))",
              border: "1px solid rgba(0,130,214,0.20)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#0082D6",
              margin: "0 auto 2rem",
              boxShadow: "0 8px 32px rgba(0,130,214,0.10)",
            }}>
              <Zap size={32} strokeWidth={1.5} />
            </div>

            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: 1.1 }}>
              Ready to upgrade your <span className="text-gradient">infrastructure?</span>
            </h2>

            <p style={{ fontSize: "1.125rem", color: "#4A5568", marginBottom: "2.5rem", maxWidth: "450px", margin: "0 auto 2.5rem" }}>
              Get a comprehensive engineering assessment and tailored project proposal.
            </p>

            {/* Quick prompt pills */}
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
              {PROMPTS.map((p) => {
                const isActive = selectedPrompt === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPrompt(p.id)}
                    style={{
                      padding: "0.6rem 1.125rem",
                      borderRadius: "99px",
                      border: `1px solid ${isActive ? "rgba(0,130,214,0.3)" : "rgba(0,0,0,0.08)"}`,
                      background: isActive ? "rgba(0,130,214,0.08)" : "rgba(0,0,0,0.02)",
                      color: isActive ? "#0082D6" : "#4A5568",
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

            {/* CTA */}
            <Link
              href={`/contact${selectedPrompt ? `?service=${selectedPrompt}` : ""}`}
              className="btn-primary-custom"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
            >
              Start Free Consultation <ArrowRight size={18} />
            </Link>

            <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "#718096", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Shield size={14} color="#0082D6" /> Your data is secure and confidential.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
