"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  {
    id: "residential",
    title: "Residential",
    tagline: "Elevate your home's infrastructure.",
    desc: "We provide homeowners with reliable, high-end infrastructure solutions designed for comfort, autonomy, and property value enhancement.",
    features: ["Off-Grid Solar & Battery Storage", "Household Borehole Systems", "Luxury Pool Construction", "Home Water Purification"],
    accent: "#00C2FF",
    icon: "🏠"
  },
  {
    id: "commercial",
    title: "Commercial & Retail",
    tagline: "Reduce overheads. Ensure continuity.",
    desc: "For office parks, shopping centres, and retail outlets, downtime is costly. We engineer robust energy and water systems that guarantee 24/7 operation while significantly cutting utility bills.",
    features: ["Commercial Solar Carports", "Hybrid Backup Power", "High-Capacity Water Storage", "HVAC Water Treatment"],
    accent: "#A78BFA",
    icon: "🏢"
  },
  {
    id: "agriculture",
    title: "Agriculture",
    tagline: "Maximize yield with smart resources.",
    desc: "Modern farming requires dependable water and power. Our agricultural solutions are built to withstand harsh conditions, delivering precise irrigation and reliable pumping driven by solar energy.",
    features: ["Solar Borehole Pumping", "Centre-Pivot Irrigation", "Drip & Micro-Sprinkler Systems", "Farm-Scale Solar Grids"],
    accent: "#00E5A0",
    icon: "🌾"
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    tagline: "Five-star guest experiences.",
    desc: "Hotels and lodges depend on flawless infrastructure to maintain guest satisfaction. From crystal-clear pools to uninterrupted power and safe drinking water, we deliver complete facility solutions.",
    features: ["Resort Pool Construction", "Silent Solar Backup", "Commercial RO Plants", "Greywater Recycling"],
    accent: "#FFB547",
    icon: "🏨"
  },
  {
    id: "industrial",
    title: "Industrial & Manufacturing",
    tagline: "Heavy-duty engineering solutions.",
    desc: "Factories and processing plants require massive scale and absolute reliability. We engineer industrial-grade power generation and complex water treatment plants to keep production lines moving.",
    features: ["MW-Scale Solar Arrays", "Industrial Effluent Treatment", "Heavy Duty Boreholes", "Process Water Filtration"],
    accent: "#94A3B8",
    icon: "🏭"
  },
  {
    id: "institutions",
    title: "Healthcare & Education",
    tagline: "Critical infrastructure for critical services.",
    desc: "Hospitals and schools cannot afford downtime or compromised water. Our institutional solutions prioritize safety, redundancy, and zero-fail operation.",
    features: ["Hospital Hybrid Solar Backup", "Campus-Wide Water Treatment", "Institutional Boreholes", "Sanitation Infrastructure"],
    accent: "#F472B6",
    icon: "🏥"
  }
];

export default function IndustriesPage() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "6rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-void)",
      }}>
        <div className="bg-mesh-alt" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label animate-fadeup" style={{ marginBottom: "1.25rem" }}>Sectors</div>
          <h1 className="animate-fadeup delay-100" style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Solutions For <span className="text-gradient">Every Sector</span>
          </h1>
          <p className="animate-fadeup delay-200" style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            Different industries face different challenges. We tailor our engineering 
            approach to meet the specific operational, regulatory, and scale requirements of your sector.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="industry-grid-page">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.id} industry={ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .industry-grid-page { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function IndustryCard({ industry, index }: { industry: typeof INDUSTRIES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="animate-fadeup"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${hovered ? `${industry.accent}40` : "rgba(255,255,255,0.06)"}`,
          borderRadius: "24px",
          padding: "2.5rem",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? `0 24px 64px rgba(0,0,0,0.5), 0 0 40px ${industry.accent}15` : "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${industry.accent}, transparent)`, opacity: hovered ? 1 : 0, transition: "opacity 0.4s" }} />
        
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "250px", height: "250px", borderRadius: "50%", background: `radial-gradient(circle, ${industry.accent}10 0%, transparent 70%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "16px",
            background: `${industry.accent}15`, border: `1px solid ${industry.accent}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2rem", transition: "transform 0.4s",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}>
            {industry.icon}
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>{industry.title}</h3>
            <div style={{ color: industry.accent, fontSize: "0.875rem", fontWeight: 600, marginTop: "0.25rem" }}>{industry.tagline}</div>
          </div>
        </div>

        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", flex: 1 }}>
          {industry.desc}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
          {industry.features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
              <CheckCircle2 size={14} color={industry.accent} style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <span>{f}</span>
            </div>
          ))}
        </div>

        <Link href={`/contact?industry=${encodeURIComponent(industry.title)}`} style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.9375rem", fontWeight: 600, color: industry.accent, textDecoration: "none",
          marginTop: "auto"
        }}>
          Discuss Your Sector Needs <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
