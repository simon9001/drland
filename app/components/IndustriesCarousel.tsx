"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Home, Building2, Sprout, Utensils, Factory, Landmark, Building, GraduationCap } from "lucide-react";

const INDUSTRIES = [
  { id: "residential", title: "Residential", description: "Home solar systems, private boreholes, and swimming pools tailored for comfortable living.", icon: Home, accent: "#FDB913", image: "/image.png" },
  { id: "commercial", title: "Commercial", description: "Energy and water infrastructure for offices, retail, and commercial properties.", icon: Building2, accent: "#0082D6", image: "/solar_panels.png" },
  { id: "agriculture", title: "Agriculture", description: "Large-scale irrigation, solar pumping, and farm water management systems.", icon: Sprout, accent: "#2DC653", image: "/water_treatment.png" },
  { id: "hospitality", title: "Hospitality", description: "Premium pool construction and reliable utility systems for hotels and resorts.", icon: Utensils, accent: "#0099FF", image: "/image.png" },
  { id: "industrial", title: "Industrial", description: "Heavy-duty water treatment and high-capacity power solutions for manufacturing.", icon: Factory, accent: "#003D6A", image: "/solar_panels.png" },
  { id: "government", title: "Government & NGO", description: "Community water projects and rural electrification engineering.", icon: Landmark, accent: "#0082D6", image: "/water_treatment.png" },
  { id: "realestate", title: "Real Estate", description: "Integrated utility planning and implementation for housing developments.", icon: Building, accent: "#FDB913", image: "/image.png" },
  { id: "education", title: "Education", description: "Sustainable water and power systems for schools and universities.", icon: GraduationCap, accent: "#2DC653", image: "/solar_panels.png" },
];

export default function IndustriesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  function scroll(dir: "left" | "right") {
    trackRef.current?.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
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
    <section style={{ padding: "80px 0", background: "#F8FAFC", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", right: "-10%",
        transform: "translateY(-50%)",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,130,214,0.03) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "1rem", color: "#0082D6" }}>Industries Served</div>
            <h2 style={{ margin: 0, color: "#1A2332" }}>Built For Every Sector</h2>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => scroll("left")}
              style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.12)", background: "white", color: "#4A5568",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                transition: "all 0.2s", boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F5F7FA"; e.currentTarget.style.color = "#1A2332"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#4A5568"; }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: "none", background: "linear-gradient(135deg, #0099FF, #003D6A)", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                transition: "all 0.2s", boxShadow: "0 8px 24px rgba(0,130,214,0.25)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          className="hide-scrollbar"
          style={{ display: "flex", gap: "1.5rem", overflowX: "auto", paddingBottom: "2rem", cursor: isDragging ? "grabbing" : "grab" }}
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              onMouseEnter={() => setHoveredId(ind.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "relative", flex: "0 0 350px", background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)", borderRadius: "24px",
                padding: 0, cursor: "pointer", transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: hoveredId === ind.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredId === ind.id ? "0 16px 48px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.06)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              <img src={ind.image} alt={ind.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "24px 24px 0 0" }} />
              <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }} />
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1, zIndex: 1 }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${ind.accent}15`, color: ind.accent, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <ind.icon size={24} />
                </div>
                <h4 style={{ fontFamily: "inherit", fontSize: "1.25rem", fontWeight: 700, color: "#1A2332", marginBottom: "0.75rem" }}>{ind.title}</h4>
                <p style={{ fontSize: "0.9375rem", color: "#718096", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>{ind.description}</p>
                <div style={{ color: ind.accent, opacity: hoveredId === ind.id ? 1 : 0, transition: "all 0.35s" }}>
                  <ArrowRight size={20} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: ind.accent, opacity: hoveredId === ind.id ? 1 : 0.6, transition: "opacity 0.3s" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
