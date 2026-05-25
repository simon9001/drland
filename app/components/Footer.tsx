"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Droplet, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#003D6A", // Dark blue footer
      position: "relative",
      overflow: "hidden",
      paddingTop: "5rem",
      color: "white",
    }}>
      {/* Top subtle border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.08)" }} />

      {/* Very subtle glow */}
      <div style={{
        position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "200px",
        background: "radial-gradient(ellipse, rgba(253,185,19,0.08) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
      }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Main Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }} className="footer-grid">

          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "linear-gradient(135deg, #0082D6, #003D6A)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Droplet size={20} color="white" />
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: "white" }}>
                HIDRA<span style={{ color: "#FDB913" }}>CORE</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "320px" }}>
              Engineering resilient infrastructure for tomorrow. Specialized in solar energy, advanced water systems, and structural engineering across Africa.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>
                <MapPin size={18} color="#FDB913" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>124 Engineering Hub, Workington<br />Harare, Zimbabwe</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>
                <Phone size={18} color="#FDB913" style={{ flexShrink: 0 }} />
                <span>+263 77 123 4567</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>
                <Mail size={18} color="#FDB913" style={{ flexShrink: 0 }} />
                <span>projects@hidracore.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h6 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}>Expertise</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {["Solar Solutions", "Borehole Drilling", "Water Treatment", "Irrigation Systems", "Swimming Pools", "Engineering Consulting"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.9375rem", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#FDB913"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h6 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}>Company</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {["About Us", "Our Projects", "Client Portal", "Careers", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.9375rem", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#FDB913"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}>Stay Updated</h6>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", marginBottom: "1.25rem", lineHeight: 1.5 }}>
              Subscribe to our newsletter for the latest engineering insights and project updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%", padding: "0.875rem 1rem",
                  borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.08)", color: "white",
                  outline: "none", fontSize: "0.9375rem",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "#FDB913"}
                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              <button
                type="submit"
                style={{
                  width: "100%", padding: "0.875rem",
                  borderRadius: "12px", border: "none",
                  background: "#FDB913", color: "#003D6A",
                  fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#E5A500"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#FDB913"}
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "2rem 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
            &copy; {new Date().getFullYear()} Hidracore Engineering. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            {/* Social Icons Inline SVG */}
            {[
              {
                id: "Facebook",
                svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              },
              {
                id: "Twitter",
                svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              },
              {
                id: "LinkedIn",
                svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              },
              {
                id: "Instagram",
                svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.id}
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(253,185,19,0.15)";
                  e.currentTarget.style.borderColor = "rgba(253,185,19,0.3)";
                  e.currentTarget.style.color = "#FDB913";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "white";
                }}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
