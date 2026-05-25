"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const PROJECTS = [
  {
    id: "solar-commercial",
    title: "1.2MW Commercial Solar Array",
    category: "solar",
    client: "AgriCorp Processing Plant",
    stats: { impact: "45% Cost Reduction", metric: "3.2 GWh/year" },
    image: "/solar_panels.png",
  },
  {
    id: "borehole-farm",
    title: "Deep Aquifer Borehole Network",
    category: "water",
    client: "Highland Estates",
    stats: { impact: "Sustainable Yield", metric: "15,000 L/hr" },
    image: "/image.png",
  },
  {
    id: "irrigation-smart",
    title: "Automated Drip Irrigation",
    category: "irrigation",
    client: "Valley Produce Farms",
    stats: { impact: "Water Saved", metric: "60% less water" },
    image: "/water_treatment.png",
  },
  {
    id: "pool-luxury",
    title: "Olympic Training Pool Complex",
    category: "pools",
    client: "National Sports Academy",
    stats: { impact: "Energy Efficient", metric: "A++ Rated Heating" },
    image: "/water_treatment.png",
  },
  {
    id: "water-treatment",
    title: "Industrial Reverse Osmosis",
    category: "water",
    client: "Beverage Bottling Co.",
    stats: { impact: "Pure Water", metric: "99.9% Filtration" },
    image: "/water_treatment.png",
  },
  {
    id: "hybrid-solar",
    title: "Off-Grid Safari Lodge Hybrid",
    category: "solar",
    client: "Serengeti Eco-Lodge",
    stats: { impact: "Zero Emissions", metric: "100% Off-Grid" },
    image: "/solar_panels.png",
  },
];

const CATEGORIES = ["All", "solar", "water", "irrigation", "pools"];

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case "solar": return "#F59E0B";
    case "water": return "#0EA5E9";
    case "irrigation": return "#10B981";
    case "pools": return "#8B5CF6";
    default: return "#64748B";
  }
};

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

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useReveal();
  const categoryColor = getCategoryColor(project.category);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: visible ? (hovered ? "scale(1.02)" : "scale(1)") : "scale(0.96)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 25px 50px -12px rgba(0,0,0,0.25)" : "0 10px 15px -3px rgba(0,0,0,0.1)",
        minHeight: "350px",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.35rem 0.875rem", borderRadius: "99px",
          background: `${categoryColor}25`,
          border: `1px solid ${categoryColor}40`,
          color: categoryColor,
          fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em",
          textTransform: "uppercase", marginBottom: "auto", alignSelf: "flex-start",
        }}>
          {project.category}
        </div>

        <div style={{ marginTop: "auto" }}>
          <h3 style={{
            fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 700,
            color: "#FFFFFF", marginBottom: "0.5rem", lineHeight: 1.2,
          }}>
            {project.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
            {project.client}
          </p>

          <div style={{
            maxHeight: hovered ? "120px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          }}>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.25rem" }}>
                  Metric
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {project.stats.metric}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.25rem" }}>
                  Impact
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.875rem", fontWeight: 700, color: "#10B981" }}>
                  <TrendingUp size={13} /> {project.stats.impact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("All");
  const { ref, visible } = useReveal();

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      style={{
        padding: "var(--section-py) 0",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      <div className="divider-glow" style={{ position: "absolute", top: 0, width: "100%" }} />

      <div className="container" style={{ position: "relative" }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem", color: "#64748B" }}>Featured Projects</div>
          <h2 style={{ margin: "0 0 1rem", color: "#0F172A" }}>
            Real Work. Real Results.
          </h2>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "99px",
                  background: isActive ? "rgba(0,130,214,0.08)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isActive ? "rgba(0,130,214,0.3)" : "rgba(0,0,0,0.08)"}`,
                  color: isActive ? "#0082D6" : "#718096",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "200px",
          gap: "1.125rem",
        }} className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/projects" className="btn-outline-custom">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
