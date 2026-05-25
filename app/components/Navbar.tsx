"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Sun, HardHat, Droplets, Sprout, Waves, Zap,
  ChevronDown, ArrowRight, Menu, X
} from "lucide-react";

const SOLUTIONS = [
  { icon: Sun,      label: "Solar & Energy",         href: "/solutions#solar",           desc: "Grid-tied, hybrid & off-grid systems" },
  { icon: HardHat,  label: "Borehole Drilling",       href: "/solutions#borehole",        desc: "Site survey to pump installation" },
  { icon: Droplets, label: "Water Treatment",         href: "/solutions#water-treatment", desc: "RO, UV & industrial filtration" },
  { icon: Sprout,   label: "Irrigation Systems",      href: "/solutions#irrigation",      desc: "Drip, sprinkler & smart scheduling" },
  { icon: Waves,    label: "Swimming Pools",          href: "/solutions#pools",           desc: "Luxury design & construction" },
  { icon: Zap,      label: "Engineering Consultancy", href: "/solutions#consultancy",     desc: "Feasibility, audits & certification" },
];

const NAV_LINKS = [
  { label: "Solutions",  href: "/solutions",  hasMega: true  },
  { label: "Industries", href: "/industries", hasMega: false },
  { label: "Projects",   href: "/projects",   hasMega: false },
  { label: "About",      href: "/about",      hasMega: false },
  { label: "Insights",   href: "/insights",   hasMega: false },
  { label: "Contact",    href: "/contact",    hasMega: false },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const pathname = usePathname();
  const megaRef  = useRef<HTMLDivElement>(null);

  /* scroll listener */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close mega on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          background: "transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", maxWidth: "100%", paddingLeft: 0 }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <img src="/Logo.png" alt="HIDRACORE Logo" style={{ height: "150px", width: "auto" }} />
            <span style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.1875rem",
              color: "#1A2332",
              letterSpacing: "-0.02em",
            }}>
              <span style={{ color: "#0082D6" }}></span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div key={link.label} ref={megaRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setMegaOpen((o) => !o)}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.3rem",
                      padding: "0.5rem 0.875rem",
                      borderRadius: "8px",
                      border: "none",
                      background: megaOpen ? "rgba(0,130,214,0.08)" : "transparent",
                      color: megaOpen ? "#0082D6" : "#4A5568",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!megaOpen) (e.currentTarget.style.color = "#1A2332");
                    }}
                    onMouseLeave={(e) => {
                      if (!megaOpen) (e.currentTarget.style.color = "#4A5568");
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>

                  {/* Mega Menu */}
                  {megaOpen && (
                    <div style={{
                      position: "absolute",
                      top: "calc(100% + 16px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "580px",
                      background: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "18px",
                      padding: "1.25rem",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                      animation: "fadeInUp 0.2s cubic-bezier(0.23,1,0.32,1) both",
                    }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0082D6", marginBottom: "0.875rem", paddingLeft: "0.5rem" }}>
                        Our Services
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.375rem" }}>
                        {SOLUTIONS.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMegaOpen(false)}
                              style={{
                                display: "flex", alignItems: "flex-start", gap: "0.875rem",
                                padding: "0.875rem",
                                borderRadius: "12px",
                                border: "1px solid transparent",
                                transition: "all 0.2s",
                                textDecoration: "none",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(0,130,214,0.04)";
                                e.currentTarget.style.borderColor = "rgba(0,130,214,0.12)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.borderColor = "transparent";
                              }}
                            >
                              <div style={{
                                width: "36px", height: "36px",
                                borderRadius: "9px",
                                background: "rgba(0,130,214,0.08)",
                                border: "1px solid rgba(0,130,214,0.12)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0,
                                color: "#0082D6",
                              }}>
                                <Icon size={16} />
                              </div>
                              <div>
                                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1A2332", marginBottom: "0.15rem" }}>
                                  {s.label}
                                </div>
                                <div style={{ fontSize: "0.78rem", color: "#718096", lineHeight: 1.4 }}>
                                  {s.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div style={{ marginTop: "0.875rem", paddingTop: "0.875rem", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "flex-end" }}>
                        <Link
                          href="/solutions"
                          onClick={() => setMegaOpen(false)}
                          style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", fontWeight: 600, color: "#0082D6", textDecoration: "none" }}
                        >
                          View all solutions <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: isActive(link.href) ? "#0082D6" : "#4A5568",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    background: isActive(link.href) ? "rgba(0,130,214,0.08)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) e.currentTarget.style.color = "#1A2332";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) e.currentTarget.style.color = "#4A5568";
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden-mobile">
            <div style={{ position: "relative" }}>
              <input 
                type="text" 
                placeholder="Search" 
                className="input input-bordered w-64" 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value) {
                    window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value)}`;
                  }
                }}
                style={{ height: "40px", minHeight: "40px", borderRadius: "8px", fontSize: "0.875rem", paddingRight: "2rem", background: "#FFFFFF" }} 
              />
              <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#A0AEC0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "40px", height: "40px",
              borderRadius: "9px",
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
              color: "#1A2332",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── MOBILE SEARCH BAR (JUST BELOW NAVBAR) ── */}
        <div 
          className="show-mobile" 
          style={{ 
            width: "calc(100% - 2rem)", 
            margin: "0 auto",
            maxWidth: "480px",
            background: "#FFFFFF", 
            padding: "0.25rem", 
            borderRadius: "99px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            left: "50%",
            transform: `translate(-50%, ${scrolled ? "-15px" : "0"})`,
            opacity: scrolled ? 0 : 1,
            pointerEvents: scrolled ? "none" : "auto",
            transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full" 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  setMobileOpen(false);
                  window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value)}`;
                }
              }}
              style={{ 
                height: "44px", 
                borderRadius: "99px", 
                border: "none",
                outline: "none",
                fontSize: "0.9375rem", 
                paddingLeft: "1.25rem",
                paddingRight: "2.5rem", 
                background: "transparent",
              }} 
            />
            <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", width: "1.2rem", height: "1.2rem", color: "#A0AEC0", pointerEvents: "none" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(0,0,0,0.4)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      {/* ── MOBILE DRAWER MENU ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: "85%",
          maxWidth: "340px",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          zIndex: 1001,
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          overflowY: "auto",
          boxShadow: mobileOpen ? "10px 0 40px rgba(0,0,0,0.15)" : "none",
        }}
      >
        {/* Drawer Header with Close Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <button 
            onClick={() => setMobileOpen(false)}
            style={{ 
              background: "transparent", border: "none", color: "#4A5568", 
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0.5rem"
            }}
          >
            <X size={24} />
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <div key={link.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              {link.hasMega ? (
                <>
                  <button
                    onClick={() => setMobileExpanded((e) => !e)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%",
                      padding: "1rem 0.5rem",
                      border: "none",
                      background: "transparent",
                      color: "#1A2332",
                      fontFamily: "var(--font-body)",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {link.label}
                    <ChevronDown size={18} style={{ transform: mobileExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", color: "#718096" }} />
                  </button>
                  {mobileExpanded && (
                    <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.125rem", marginBottom: "0.5rem" }}>
                      {SOLUTIONS.map((s) => {
                        return (
                          <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{
                            display: "flex", alignItems: "center", gap: "0.75rem",
                            padding: "0.75rem 0.5rem",
                            color: "#4A5568",
                            fontSize: "0.95rem",
                            fontWeight: 400,
                            textDecoration: "none",
                          }}>
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                  display: "block",
                  padding: "1rem 0.5rem",
                  color: isActive(link.href) ? "#0082D6" : "#4A5568",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "0.5rem" }}>
          {/* Mobile search bar removed from here as per user request */}
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 1024px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </>
  );
}
