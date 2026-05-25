"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp, Filter, Tag } from "lucide-react";

const PROJECTS = [
  {
    id: "solar-commercial",
    title: "50kW Commercial Solar Installation",
    location: "Harare, Zimbabwe",
    category: "Solar & Energy",
    capacity: "50kW | 200 Panels",
    impact: "Eliminated $4,200/mo grid cost",
    client: "TechHub Enterprise",
    date: "Oct 2023",
    accent: "#FFB547",
    gradient: "linear-gradient(145deg, #1a0f00, #0f0800)",
    icon: "☀️",
  },
  {
    id: "borehole-farm",
    title: "Agricultural Borehole System",
    location: "Mazowe, Zimbabwe",
    category: "Borehole",
    capacity: "180m Depth | 12,000L/hr",
    impact: "Irrigates 200-acre farm",
    client: "Agriharvest Farms",
    date: "Aug 2023",
    accent: "#A78BFA",
    gradient: "linear-gradient(145deg, #0f0a1a, #060412)",
    icon: "💧",
  },
  {
    id: "irrigation-smart",
    title: "Smart Irrigation Network",
    location: "Chinhoyi, Zimbabwe",
    category: "Irrigation",
    capacity: "15-hectare drip system",
    impact: "60% water savings",
    client: "Chinhoyi Estates",
    date: "Jan 2024",
    accent: "#00E5A0",
    gradient: "linear-gradient(145deg, #001a0e, #000f08)",
    icon: "🌱",
  },
  {
    id: "pool-luxury",
    title: "Luxury Infinity Pool Construction",
    location: "Borrowdale, Harare",
    category: "Swimming Pools",
    capacity: "18m × 6m heated pool",
    impact: "R4.2M property value increase",
    client: "Private Residence",
    date: "Dec 2023",
    accent: "#38BDF8",
    gradient: "linear-gradient(145deg, #00101a, #000810)",
    icon: "🏊",
  },
  {
    id: "water-treatment",
    title: "Industrial Water Treatment Plant",
    location: "Bulawayo, Zimbabwe",
    category: "Water Treatment",
    capacity: "50,000 L/day",
    impact: "Zero wastewater discharge",
    client: "Belmont Manufacturing",
    date: "Feb 2024",
    accent: "#00C2FF",
    gradient: "linear-gradient(145deg, #001422, #000c18)",
    icon: "🔬",
  },
  {
    id: "hybrid-solar",
    title: "Hospital Hybrid Solar Backup",
    location: "Gweru, Zimbabwe",
    category: "Solar & Energy",
    capacity: "80kW Solar | 200kWh Battery",
    impact: "24/7 uninterrupted power",
    client: "MedCentral Hospitals",
    date: "Nov 2023",
    accent: "#FB923C",
    gradient: "linear-gradient(145deg, #1a0800, #0f0500)",
    icon: "🏥",
  },
  {
    id: "solar-residential",
    title: "Residential Off-Grid System",
    location: "Victoria Falls, Zimbabwe",
    category: "Solar & Energy",
    capacity: "15kW | 20kWh Battery",
    impact: "100% off-grid autonomy",
    client: "Private Lodge",
    date: "Mar 2024",
    accent: "#FBBF24",
    gradient: "linear-gradient(145deg, #1a1500, #0f0c00)",
    icon: "🏡",
  },
  {
    id: "pool-commercial",
    title: "Hotel Resort Pool Complex",
    location: "Kariba, Zimbabwe",
    category: "Swimming Pools",
    capacity: "Olympic size + kids pool",
    impact: "30% increase in bookings",
    client: "Lakeview Resort",
    date: "Sep 2023",
    accent: "#60A5FA",
    gradient: "linear-gradient(145deg, #000a1a, #00050f)",
    icon: "🌴",
  }
];

const CATEGORIES = ["All", "Solar & Energy", "Borehole", "Irrigation", "Swimming Pools", "Water Treatment"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "6rem 0 4rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-void)",
      }}>
        <div className="bg-mesh-alt" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label animate-fadeup" style={{ marginBottom: "1.25rem" }}>Portfolio</div>
          <h1 className="animate-fadeup delay-100" style={{ margin: "0" }}>
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="animate-fadeup delay-200" style={{ maxWidth: "560px", margin: "1rem auto 0", fontSize: "1.0625rem" }}>
            Explore our track record of engineering excellence across Zimbabwe. 
            From luxury residential to heavy industrial infrastructure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          
          {/* Controls */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", marginBottom: "3rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "99px",
                    border: `1px solid ${filter === cat ? "rgba(0,194,255,0.4)" : "rgba(255,255,255,0.07)"}`,
                    background: filter === cat ? "rgba(0,194,255,0.12)" : "rgba(255,255,255,0.02)",
                    color: filter === cat ? "var(--cyan)" : "var(--text-tertiary)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { if (filter !== cat) { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; } }}
                  onMouseLeave={(e) => { if (filter !== cat) { e.currentTarget.style.color = "var(--text-tertiary)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; } }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Filter size={16} /> Showing {filtered.length} projects
            </div>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }} className="projects-grid-page">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid-page { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animate-fadeup"
      style={{
        animationDelay: `${index * 100}ms`,
        borderRadius: "24px",
        overflow: "hidden",
        background: project.gradient,
        border: `1px solid ${hovered ? `${project.accent}40` : "rgba(255,255,255,0.08)"}`,
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 80px rgba(0,0,0,0.5), 0 0 40px ${project.accent}15`
          : "0 8px 32px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column" as const,
        position: "relative" as const,
      }}
    >
      {/* Pattern & glow */}
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "200px", height: "200px", borderRadius: "50%",
        background: `radial-gradient(circle, ${project.accent}15 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Image Area Placeholder */}
      <div style={{
        height: "220px", position: "relative",
        background: "rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{ fontSize: "6rem", opacity: hovered ? 0.3 : 0.15, transition: "all 0.5s", transform: hovered ? "scale(1.1)" : "scale(1)" }}>
          {project.icon}
        </div>
        
        {/* Floating badge */}
        <div style={{
          position: "absolute", top: "1.25rem", left: "1.25rem",
          display: "flex", alignItems: "center", gap: "0.4rem",
          padding: "0.3rem 0.8rem", borderRadius: "99px",
          background: "rgba(0,0,0,0.65)",
          border: `1px solid ${project.accent}40`,
          fontSize: "0.75rem", fontWeight: 700, color: project.accent,
          letterSpacing: "0.05em", textTransform: "uppercase",
        }}>
          <Tag size={12} /> {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1, background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <h3 style={{ fontSize: "1.375rem", margin: 0, lineHeight: 1.3 }}>{project.title}</h3>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", color: "var(--text-tertiary)", marginBottom: "2rem" }}>
          <MapPin size={14} /> {project.location}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem", flex: 1 }}>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "0.375rem" }}>Client</div>
            <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{project.client}</div>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "0.375rem" }}>Date</div>
            <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{project.date}</div>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "0.375rem" }}>Capacity</div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: project.accent }}>{project.capacity}</div>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "0.375rem" }}>Impact</div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--emerald)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <TrendingUp size={14} /> {project.impact}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href={`/projects#${project.id}`} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.875rem", fontWeight: 600, color: project.accent,
            textDecoration: "none", transition: "gap 0.2s"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = "0.75rem" }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = "0.5rem" }}
          >
            View Case Study <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
