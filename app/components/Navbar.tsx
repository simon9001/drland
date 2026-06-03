"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sun, HardHat, Droplets, Sprout, Waves, Zap,
  ChevronDown, ArrowRight, Menu, X, Search,
} from "lucide-react";

const SOLUTIONS = [
  { icon: Sun,      label: "Solar Power Solutions",         href: "/services#solar",       desc: "Grid-tied, hybrid & off-grid systems" },
  { icon: HardHat,  label: "Borehole Drilling & Equipping", href: "/services#borehole",    desc: "Site survey to full commissioning" },
  { icon: Droplets, label: "Water Treatment & Design",      href: "/services#water",       desc: "RO, UV & industrial filtration" },
  { icon: Sprout,   label: "Irrigation Systems",            href: "/services#irrigation",  desc: "Drip, sprinkler & automated scheduling" },
  { icon: Waves,    label: "Swimming Pool Construction",     href: "/services#pools",       desc: "Design, build & maintenance" },
  { icon: Zap,      label: "Engineering Consultancy",       href: "/services#consultancy", desc: "Feasibility, audits & certification" },
];

/* 6 items — no duplicate Solutions/Services */
const NAV_LINKS = [
  { label: "Services",   href: "/services",   hasMega: true  },
  { label: "Industries", href: "/industries", hasMega: false },
  { label: "Projects",   href: "/projects",   hasMega: false },
  { label: "About",      href: "/about",      hasMega: false },
  { label: "Insights",   href: "/insights",   hasMega: false },
  { label: "Contact",    href: "/contact",    hasMega: false },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [megaOpen,       setMegaOpen]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [desktopQuery,   setDesktopQuery]   = useState("");
  const pathname = usePathname();
  const router   = useRouter();
  const megaRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleSearch = (q: string) => {
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: "#FFFFFF",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)"
            : "0 1px 0 rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
            gap: "1rem",
          }}
        >

          {/* ── LOGO ── always visible on desktop + mobile ── */}
          <Link href="/" className="logo-link" aria-label="HIDRACORE Home">
            {/* Image — rendered at defined size */}
            <Image
              src="/Logo.png"
              alt=""
              width={150}
              height={50}
              className="logo-img"
              priority
            />
            {/* Text fallback — always visible, reinforces brand on small screens */}
            <span className="logo-text">
              HIDRA<span style={{ color: "#0082D6" }}>CORE</span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: 1, justifyContent: "center" }} className="hidden-mobile">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div key={link.label} ref={megaRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setMegaOpen((o) => !o)}
                    className={`nav-link${megaOpen ? " nav-link--active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                    }}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                      }}
                    />
                  </button>

                  {megaOpen && (
                    <div style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "560px",
                      background: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "16px",
                      padding: "1.125rem",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
                      animation: "fadeInUp 0.2s cubic-bezier(0.23,1,0.32,1) both",
                    }}>
                      <p style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                        marginBottom: "0.75rem",
                        paddingLeft: "0.5rem",
                      }}>
                        Our Services
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem" }}>
                        {SOLUTIONS.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMegaOpen(false)}
                              className="mega-item"
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.75rem",
                                padding: "0.75rem",
                                borderRadius: "10px",
                                border: "1px solid transparent",
                                transition: "all 0.18s",
                              }}
                            >
                              <div style={{
                                width: "34px", height: "34px",
                                borderRadius: "8px",
                                background: "rgba(0,130,214,0.07)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0,
                                color: "var(--primary)",
                              }}>
                                <Icon size={16} />
                              </div>
                              <div>
                                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.1rem" }}>
                                  {s.label}
                                </div>
                                <div style={{ fontSize: "0.775rem", color: "var(--text-tertiary)", lineHeight: 1.35 }}>
                                  {s.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div style={{
                        marginTop: "0.75rem",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}>
                        <Link
                          href="/solutions"
                          onClick={() => setMegaOpen(false)}
                          style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", fontWeight: 600, color: "var(--primary)" }}
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
                  className={`nav-link${isActive(link.href) ? " nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── DESKTOP SEARCH ── */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }} className="hidden-mobile">
            <div style={{ position: "relative" }}>
              <Search
                size={15}
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-tertiary)",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                value={desktopQuery}
                onChange={(e) => setDesktopQuery(e.target.value)}
                placeholder="Search…"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch(desktopQuery);
                }}
                style={{
                  height: "38px",
                  width: "180px",
                  paddingLeft: "2.25rem",
                  paddingRight: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.09)",
                  background: "var(--bg-dark)",
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  transition: "border-color 0.2s, width 0.3s",
                  cursor: "pointer",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.width = "220px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)";
                  e.currentTarget.style.width = "180px";
                }}
              />
            </div>
          </div>

          {/* ── MOBILE RIGHT ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="show-mobile">
            {/* Search icon → /search page */}
            <Link
              href="/search"
              aria-label="Search"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "9px",
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.07)",
                color: "var(--text-primary)",
              }}
            >
              <Search size={18} />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "9px",
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.07)",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE BACKDROP ── */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(0,0,0,0.35)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        style={{
          position: "fixed",
          top: 0, bottom: 0, left: 0,
          width: "82%",
          maxWidth: "340px",
          borderTopRightRadius: "18px",
          borderBottomRightRadius: "18px",
          zIndex: 1001,
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.38s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: mobileOpen ? "8px 0 40px rgba(0,0,0,0.14)" : "none",
        }}
      >
        {/* Drawer header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.125rem 1.375rem",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          flexShrink: 0,
        }}>
          {/* Logo in drawer — image + text, always clearly visible */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="logo-link"
            aria-label="HIDRACORE Home"
          >
            <Image
              src="/Logo.png"
              alt=""
              width={120}
              height={40}
              className="logo-img"
              style={{ height: "36px" }}
            />
            <span className="logo-text">
              HIDRA<span style={{ color: "#0082D6" }}>CORE</span>
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              padding: "0.375rem",
              display: "flex",
              alignItems: "center",
              borderRadius: "6px",
              flexShrink: 0,
            }}
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        {/* Mobile search inside drawer */}
        <div style={{ padding: "1rem 1.375rem 0" }}>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary)", pointerEvents: "none" }} />
            <input
              type="text"
              placeholder="Search services, industries…"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value) {
                  setMobileOpen(false);
                  handleSearch(e.currentTarget.value);
                }
              }}
              style={{
                width: "100%",
                height: "44px",
                paddingLeft: "2.375rem",
                paddingRight: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.09)",
                background: "var(--bg-dark)",
                fontSize: "0.9375rem",
                color: "var(--text-primary)",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,130,214,0.35)")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)")}
            />
          </div>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", flex: 1, padding: "0.5rem 0" }}>
          {NAV_LINKS.map((link) => (
            <div key={link.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              {link.hasMega ? (
                <>
                  <button
                    onClick={() => setMobileExpanded((e) => !e)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0.875rem 1.375rem",
                      border: "none",
                      background: "transparent",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                        color: "var(--text-tertiary)",
                      }}
                    />
                  </button>
                  {mobileExpanded && (
                    <div style={{ background: "var(--bg-dark)", paddingBottom: "0.5rem" }}>
                      {SOLUTIONS.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                              padding: "0.75rem 1.375rem 0.75rem 1.625rem",
                              color: "var(--text-secondary)",
                              fontSize: "0.9375rem",
                              fontWeight: 400,
                            }}
                          >
                            <Icon size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.875rem 1.375rem",
                    color: isActive(link.href) ? "var(--primary)" : "var(--text-secondary)",
                    fontSize: "1rem",
                    fontWeight: isActive(link.href) ? 600 : 500,
                    background: isActive(link.href) ? "rgba(0,130,214,0.05)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: "1.25rem 1.375rem", borderTop: "1px solid rgba(0,0,0,0.06)", flexShrink: 0 }}>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary-custom"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Get a Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        /* Logo layout */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Logo image — explicit sizing via CSS beats inline style + next/image conflicts */
        .logo-img {
          height: 44px !important;
          width: auto !important;
          display: block;
          object-fit: contain;
        }

        /* Fallback text — visible alongside image */
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        /* On desktop, show only image (image carries brand) */
        @media (min-width: 1025px) {
          .logo-text { display: none; }
          .logo-img  { height: 46px !important; }
        }

        /* On mobile, show image + text for guaranteed visibility */
        @media (max-width: 1024px) {
          .logo-img  { height: 38px !important; }
          .logo-text { font-size: 1rem; }
        }

        /* Nav show/hide */
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 1024px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }

        /* Mega menu hover */
        .mega-item:hover {
          background: rgba(0,130,214,0.04) !important;
          border-color: rgba(0,130,214,0.10) !important;
        }
      `}</style>
    </>
  );
}
