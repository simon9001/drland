"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Home, Building2 } from "lucide-react";

const TRACKS = {
  residential: {
    label: "Residential / Small Commercial",
    icon: Home,
    prompts: [
      { id: "home-solar",   label: "Home solar backup system"     },
      { id: "borehole",     label: "Private borehole drilling"    },
      { id: "pool",         label: "Swimming pool design & build" },
      { id: "irrigation",   label: "Garden / small-farm irrigation" },
      { id: "water-home",   label: "Residential water treatment"  },
    ],
  },
  commercial: {
    label: "Commercial / Industrial",
    icon: Building2,
    prompts: [
      { id: "commercial-solar",  label: "Commercial solar array"         },
      { id: "industrial-water",  label: "Industrial water treatment"     },
      { id: "large-irrigation",  label: "Large-scale irrigation network" },
      { id: "feasibility",       label: "Engineering feasibility study"  },
      { id: "multi-site",        label: "Multi-site infrastructure"      },
    ],
  },
} as const;

type Track = keyof typeof TRACKS;

export default function ConsultationCTA() {
  const [activeTrack,    setActiveTrack]    = useState<Track>("residential");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const track = TRACKS[activeTrack];

  return (
    <section
      id="consultation"
      style={{ padding: "var(--section-py) 0", background: "var(--bg-dark)", position: "relative" }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">
        <div style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "18px",
          overflow: "hidden",
        }}>

          {/* Top band */}
          <div style={{
            padding: "2.5rem 3rem",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}>
            <div>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>Free Consultation</div>
              <h2 style={{ margin: "0 0 0.75rem", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", margin: 0, maxWidth: "420px" }}>
                Tell us what you need. We'll assess the site, design the system, and give you a clear proposal — no obligation.
              </p>
            </div>

            {/* Track toggle */}
            <div style={{
              display: "flex",
              background: "var(--bg-dark)",
              borderRadius: "10px",
              padding: "4px",
              border: "1px solid rgba(0,0,0,0.07)",
              flexShrink: 0,
              alignSelf: "flex-start",
            }}>
              {(Object.entries(TRACKS) as [Track, typeof TRACKS[Track]][]).map(([key, t]) => {
                const Icon = t.icon;
                const isActive = activeTrack === key;
                return (
                  <button
                    key={key}
                    onClick={() => { setActiveTrack(key); setSelectedPrompt(null); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.625rem 1.125rem",
                      borderRadius: "7px",
                      border: "none",
                      background: isActive ? "#FFFFFF" : "transparent",
                      color: isActive ? "var(--text-primary)" : "var(--text-tertiary)",
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 400,
                      cursor: "pointer",
                      boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                      transition: "all 0.18s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={14} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service prompts */}
          <div style={{ padding: "2rem 3rem" }}>
            <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              What do you need help with?
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {track.prompts.map((p) => {
                const isActive = selectedPrompt === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPrompt(isActive ? null : p.id)}
                    style={{
                      padding: "0.55rem 1.125rem",
                      borderRadius: "99px",
                      border: `1px solid ${isActive ? "rgba(0,130,214,0.35)" : "rgba(0,0,0,0.09)"}`,
                      background: isActive ? "rgba(0,130,214,0.07)" : "transparent",
                      color: isActive ? "var(--primary)" : "var(--text-secondary)",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 400,
                      cursor: "pointer",
                      transition: "all 0.18s",
                    }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link
                href={`/contact?track=${activeTrack}${selectedPrompt ? `&service=${selectedPrompt}` : ""}`}
                className="btn-primary-custom"
              >
                Request a Consultation <ArrowRight size={15} />
              </Link>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
                <Shield size={13} color="var(--primary)" />
                No commitment. We respond within one business day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
