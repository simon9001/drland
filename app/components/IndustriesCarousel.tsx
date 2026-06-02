"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Home, Building2, Sprout, Utensils, Factory, Landmark, Building, GraduationCap } from "lucide-react";

const INDUSTRIES = [
  { id: "residential",  title: "Residential",      description: "Home solar systems, private boreholes, and swimming pools tailored for comfortable living.", icon: Home,           accent: "#FDB913", image: "/image.png" },
  { id: "commercial",   title: "Commercial",        description: "Energy and water infrastructure for offices, retail, and commercial properties.",            icon: Building2,      accent: "#0082D6", image: "/solar_panels.png" },
  { id: "agriculture",  title: "Agriculture",       description: "Large-scale irrigation, solar pumping, and farm water management systems.",                  icon: Sprout,         accent: "#2DC653", image: "/water_treatment.png" },
  { id: "hospitality",  title: "Hospitality",       description: "Premium pool construction and reliable utility systems for hotels and resorts.",              icon: Utensils,       accent: "#0082D6", image: "/image.png" },
  { id: "industrial",   title: "Industrial",        description: "Heavy-duty water treatment and high-capacity power solutions for manufacturing.",             icon: Factory,        accent: "#003D6A", image: "/solar_panels.png" },
  { id: "government",   title: "Government & NGO",  description: "Community water projects and rural electrification engineering.",                            icon: Landmark,       accent: "#0082D6", image: "/water_treatment.png" },
  { id: "realestate",   title: "Real Estate",       description: "Integrated utility planning and implementation for housing developments.",                    icon: Building,       accent: "#FDB913", image: "/image.png" },
  { id: "education",    title: "Education",         description: "Sustainable water and power systems for schools and universities.",                           icon: GraduationCap,  accent: "#2DC653", image: "/solar_panels.png" },
];

export default function IndustriesCarousel() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX,     setStartX]     = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function scroll(dir: "left" | "right") {
    trackRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  }

  function onDown(e: React.MouseEvent) {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  }
  function onMove(e: React.MouseEvent) {
    if (!isDragging || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  }
  function onUp() { setIsDragging(false); }

  return (
    <section style={{ padding: "var(--section-py) 0", background: "var(--bg-dark)", position: "relative", overflow: "hidden" }}>
      <div className="divider-glow" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1.25rem" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "0.875rem" }}>Industries Served</div>
            <h2 style={{ margin: 0 }}>Built For Every Sector</h2>
          </div>

          {/* Symmetric scroll buttons */}
          <div style={{ display: "flex", gap: "0.625rem" }}>
            <button
              onClick={() => scroll("left")}
              className="scroll-btn"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="scroll-btn"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          className="hide-scrollbar"
          style={{
            display: "flex",
            gap: "1.125rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="industry-card"
                style={{
                  position: "relative",
                  flex: "0 0 320px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.32s cubic-bezier(0.23,1,0.32,1), box-shadow 0.32s, border-color 0.32s",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "160px", flexShrink: 0 }}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="320px"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "11px",
                    background: `${ind.accent}12`,
                    color: ind.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.125rem",
                  }}>
                    <Icon size={21} />
                  </div>

                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.625rem",
                  }}>
                    {ind.title}
                  </h4>

                  <p style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}>
                    {ind.description}
                  </p>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: ind.accent,
                    opacity: 0.85,
                  }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .industry-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(0,130,214,0.18) !important;
          box-shadow: 0 12px 36px rgba(0,0,0,0.09) !important;
        }
      `}</style>
    </section>
  );
}
