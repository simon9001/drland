"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const ARTICLES = [
  {
    id: "solar-roi-2024",
    title: "Calculating True ROI on Commercial Solar in 2024",
    excerpt: "With rising grid tariffs, commercial solar payback periods have dropped significantly. We break down the real numbers for a 100kW system.",
    category: "Energy",
    date: "May 15, 2024",
    readTime: "6 min read",
    accent: "#FFB547",
    image: "linear-gradient(145deg, #1a0f00, #0f0800)",
  },
  {
    id: "borehole-maintenance",
    title: "The Hidden Cost of Deferred Borehole Maintenance",
    excerpt: "Skipping annual yield tests and pump servicing might save money today, but it often leads to catastrophic pump failure within 3 years.",
    category: "Water",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    accent: "#A78BFA",
    image: "linear-gradient(145deg, #0f0a1a, #060412)",
  },
  {
    id: "hybrid-vs-offgrid",
    title: "Hybrid vs. Off-Grid: Which Architecture is Right For You?",
    excerpt: "Understanding the technical and financial differences between maintaining a grid connection with battery backup versus going entirely off-grid.",
    category: "Energy",
    date: "Apr 10, 2024",
    readTime: "8 min read",
    accent: "#00C2FF",
    image: "linear-gradient(145deg, #001422, #000c18)",
  },
  {
    id: "smart-irrigation-yields",
    title: "How Smart Irrigation Automation Increases Crop Yields",
    excerpt: "Soil moisture sensors tied to automated drip scheduling can reduce water usage by 40% while simultaneously increasing harvest yields.",
    category: "Agriculture",
    date: "Mar 22, 2024",
    readTime: "5 min read",
    accent: "#00E5A0",
    image: "linear-gradient(145deg, #001a0e, #000f08)",
  },
  {
    id: "pool-chemistry",
    title: "Commercial Pool Chemistry: The Case for Automated Dosing",
    excerpt: "Why manual chemical balancing is costing your resort money, damaging your equipment, and risking guest health.",
    category: "Infrastructure",
    date: "Feb 18, 2024",
    readTime: "7 min read",
    accent: "#38BDF8",
    image: "linear-gradient(145deg, #00101a, #000810)",
  },
  {
    id: "water-treatment-ro",
    title: "Reverse Osmosis (RO) Explained for Industrial Applications",
    excerpt: "A deep dive into how industrial RO plants work, when they are necessary, and the pre-filtration steps required for longevity.",
    category: "Water",
    date: "Jan 05, 2024",
    readTime: "10 min read",
    accent: "#F472B6",
    image: "linear-gradient(145deg, #1a0812, #0f050a)",
  }
];

const CATEGORIES = ["All", "Energy", "Water", "Agriculture", "Infrastructure"];

export default function InsightsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? ARTICLES : ARTICLES.filter(a => a.category === filter);

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "6rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label animate-fadeup" style={{ marginBottom: "1.25rem" }}>Insights & News</div>
          <h1 className="animate-fadeup delay-100" style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Engineering <span className="text-gradient">Knowledge</span>
          </h1>
          <p className="animate-fadeup delay-200" style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            Technical deep dives, industry analysis, and operational best practices from the HIDRACORE engineering team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          
          {/* Controls */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "4rem" }}>
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
                  fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="insights-grid">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ArticleCard({ article, index }: { article: typeof ARTICLES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/insights/${article.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animate-fadeup"
      style={{
        animationDelay: `${index * 100}ms`,
        display: "flex", flexDirection: "column",
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? `${article.accent}40` : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        overflow: "hidden",
        textDecoration: "none",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 24px 64px rgba(0,0,0,0.4), 0 0 30px ${article.accent}10` : "none",
      }}
    >
      {/* Image Area */}
      <div style={{
        height: "200px",
        background: article.image,
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden"
      }}>
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle, ${article.accent}15 0%, transparent 80%)`,
          opacity: hovered ? 1 : 0.4, transition: "opacity 0.4s"
        }} />
        
        {/* Category tag */}
        <div style={{
          position: "absolute", top: "1.25rem", left: "1.25rem",
          display: "flex", alignItems: "center", gap: "0.3rem",
          padding: "0.3rem 0.75rem", borderRadius: "99px",
          background: "rgba(0,0,0,0.65)",
          border: `1px solid ${article.accent}40`,
          fontSize: "0.75rem", fontWeight: 700, color: article.accent,
          letterSpacing: "0.05em", textTransform: "uppercase",
        }}>
          <Tag size={12} /> {article.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
          {article.title}
        </h3>
        
        <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem", flex: 1 }}>
          {article.excerpt}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Calendar size={13} /> {article.date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Clock size={13} /> {article.readTime}</span>
          </div>
          <ArrowRight size={18} color={hovered ? article.accent : "var(--text-tertiary)"} style={{ transition: "color 0.2s" }} />
        </div>
      </div>
    </Link>
  );
}
