"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

/* All expertise links point to real service pages */
const EXPERTISE = [
  { label: "Solar Power Solutions",    href: "/services/solar"          },
  { label: "Borehole Drilling",        href: "/services/borehole"       },
  { label: "Water Treatment",          href: "/services/water-treatment" },
  { label: "Irrigation Systems",       href: "/services/irrigation"     },
  { label: "Swimming Pools",           href: "/services/pools"          },
  { label: "Engineering Consultancy",  href: "/services/consultancy"    },
];

/* All company links point to real pages — no Client Portal, no Newsletter */
const COMPANY = [
  { label: "About Us",      href: "/about"    },
  { label: "Our Projects",  href: "/projects" },
  { label: "Insights",      href: "/insights" },
  { label: "Contact Us",    href: "/contact"  },
];

const SOCIALS = [
  {
    id: "Facebook",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    href: "#",
  },
  {
    id: "LinkedIn",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    href: "#",
  },
  {
    id: "Twitter",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
    href: "#",
  },
  {
    id: "Instagram",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--primary-dark)",
      position: "relative",
      overflow: "hidden",
      paddingTop: "5rem",
      color: "white",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.07)" }} />

      <div className="container" style={{ position: "relative" }}>
        {/* 3-column grid (newsletter removed) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1.375rem" }}>
              <Image
                src="/Logo.png"
                alt="HIDRACORE"
                width={140}
                height={48}
                style={{ height: "44px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{
              color: "rgba(255,255,255,0.58)",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              marginBottom: "1.875rem",
              maxWidth: "300px",
            }}>
              Full-service engineering contractor for water and energy infrastructure. We assess, design, supply and install — across Zimbabwe.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                <MapPin size={15} color="var(--yellow)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Harare, Zimbabwe</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                <Phone size={15} color="var(--yellow)" style={{ flexShrink: 0 }} />
                <span>+263 77 123 4567</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                <Mail size={15} color="var(--yellow)" style={{ flexShrink: 0 }} />
                <span>info@hidracore.co.zw</span>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h6 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "1.375rem" }}>
              Our Services
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {EXPERTISE.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "1.375rem" }}>
              Company
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "1.75rem 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
            &copy; {new Date().getFullYear()} HIDRACORE Engineering. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "0.625rem" }}>
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.id}
                className="social-btn"
                style={{
                  width: "34px", height: "34px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.55)", transition: "all 0.2s",
                }}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--yellow) !important; }
        .social-btn:hover {
          background: rgba(253,185,19,0.12) !important;
          border-color: rgba(253,185,19,0.25) !important;
          color: var(--yellow) !important;
        }
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
