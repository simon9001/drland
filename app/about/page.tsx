"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Award, Globe, Target, MapPin, Zap } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function AboutPage() {
  const statRef = useReveal();
  const visionRef = useReveal();

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "6rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label animate-fadeup" style={{ marginBottom: "1.25rem" }}>Who We Are</div>
          <h1 className="animate-fadeup delay-100" style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Engineering The <span className="text-gradient">Future</span> Of Infrastructure
          </h1>
          <p className="animate-fadeup delay-200" style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            HIDRACORE is a premier engineering firm specialising in integrated water and energy solutions. 
            We design, build, and maintain mission-critical infrastructure across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "4rem 0", background: "var(--bg-dark)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container" ref={statRef.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }} className="stats-grid">
            {[
              { val: "10+", label: "Years Experience", icon: ClockIcon },
              { val: "500+", label: "Projects Completed", icon: CheckIcon },
              { val: "12MW", label: "Solar Installed", icon: Zap },
              { val: "15+", label: "Expert Engineers", icon: Users },
            ].map((stat, i) => (
              <div key={i} style={{
                transform: statRef.visible ? "translateY(0)" : "translateY(20px)",
                opacity: statRef.visible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 100}ms`
              }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0,194,255,0.1)", color: "var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <stat.icon size={20} />
                </div>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{stat.val}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginTop: "0.5rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container" ref={visionRef.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="vision-grid">
            <div style={{ transform: visionRef.visible ? "translateX(0)" : "translateX(-30px)", opacity: visionRef.visible ? 1 : 0, transition: "all 0.8s" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Our Mission</div>
              <h2 style={{ marginBottom: "1.5rem" }}>Reliability without compromise.</h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Founded with a vision to modernize Zimbabwe's infrastructure, HIDRACORE brings together top-tier engineering talent with global technology partners. 
                We don't just sell equipment; we engineer holistic systems designed to perform flawlessly for decades.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Whether it's ensuring a hospital has 24/7 uninterrupted power, or designing a smart irrigation network for a commercial farm, our approach remains the same: meticulous planning, precision execution, and ongoing support.
              </p>
            </div>
            
            <div style={{ transform: visionRef.visible ? "translateX(0)" : "translateX(30px)", opacity: visionRef.visible ? 1 : 0, transition: "all 0.8s", position: "relative" }}>
              <div style={{ position: "absolute", inset: "-20%", background: "radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 60%)", filter: "blur(40px)", pointerEvents: "none" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", position: "relative" }}>
                <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,16,34,0.6)" }}>
                  <Target size={28} color="var(--cyan)" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Precision</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", margin: 0 }}>Engineering driven by data, not guesswork.</p>
                </div>
                <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,16,34,0.6)", transform: "translateY(2rem)" }}>
                  <Award size={28} color="var(--emerald)" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Quality</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", margin: 0 }}>Sourcing only Tier-1 certified components.</p>
                </div>
                <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,16,34,0.6)" }}>
                  <Globe size={28} color="#A78BFA" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Sustainability</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", margin: 0 }}>Building infrastructure for the long term.</p>
                </div>
                <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,16,34,0.6)", transform: "translateY(2rem)" }}>
                  <Users size={28} color="#FFB547" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Partnership</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", margin: 0 }}>Client success is our primary metric.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .vision-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const ClockIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const CheckIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
