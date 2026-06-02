"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    case "solar":     return "#FDB913";
    case "water":     return "#0082D6";
    case "irrigation":return "#2DC653";
    case "pools":     return "#0099FF";
    default:          return "#718096";
  }
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
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
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s",
        transform: visible ? (hovered ? "scale(1.015)" : "scale(1)") : "scale(0.97)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 60}ms`,
        boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.22)" : "0 4px 16px rgba(0,0,0,0.08)",
        minHeight: "280px",
      }}
    >
      {/* Background image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Overlay gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "1.625rem",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Category badge */}
        <div style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          padding: "0.3rem 0.75rem",
          borderRadius: "99px",
          background: `${categoryColor}22`,
          border: `1px solid ${categoryColor}45`,
          color: categoryColor,
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "auto",
        }}>
          {project.category}
        </div>

        {/* Bottom text */}
        <div style={{ marginTop: "auto" }}>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "0.35rem",
            lineHeight: 1.25,
          }}>
            {project.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginBottom: "1.125rem" }}>
            {project.client}
          </p>

          {/* Stats — reveal on hover */}
          <div style={{
            maxHeight: hovered ? "80px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.3s",
          }}>
            <div style={{ display: "flex", gap: "1.75rem" }}>
              <div>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem", letterSpacing: "0.1em" }}>
                  Metric
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {project.stats.metric}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem", letterSpacing: "0.1em" }}>
                  Impact
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.875rem", fontWeight: 700, color: "#2DC653" }}>
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
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            transform: visible ? "translateY(0)" : "translateY(18px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="section-label" style={{ marginBottom: "0.875rem" }}>Featured Projects</div>
          <h2 style={{ margin: "0 0 0.5rem" }}>
            Real Work. <span className="text-gradient">Real Results.</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          marginBottom: "2.5rem",
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "99px",
                  background: isActive ? "rgba(0,130,214,0.08)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(0,130,214,0.25)" : "rgba(0,0,0,0.08)"}`,
                  color: isActive ? "var(--primary)" : "var(--text-tertiary)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "capitalize",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="projects-grid"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/projects" className="btn-outline-custom">
            View All Projects <ArrowRight size={15} />
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
