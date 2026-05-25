"use client";

import { useState } from "react";
import { Lock, User, KeyRound, ArrowRight } from "lucide-react";

export default function PortalPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); alert("Demo: Invalid credentials"); }, 1500);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg-void)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "5rem 1.5rem"
    }}>
      {/* Background */}
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div className="animate-blob1" style={{
        position: "absolute", top: "10%", left: "20%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none", filter: "blur(40px)"
      }} />

      <div className="glass-card animate-fadeup" style={{
        width: "100%", maxWidth: "440px",
        padding: "3rem",
        background: "rgba(10,16,34,0.75)",
        position: "relative", zIndex: 10,
        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,194,255,0.15)",
        textAlign: "center"
      }}>
        
        <div style={{
          width: "64px", height: "64px", borderRadius: "16px",
          background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 2rem", color: "var(--cyan)",
          boxShadow: "0 8px 32px rgba(0,194,255,0.15)"
        }}>
          <Lock size={28} />
        </div>

        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Client Portal</h1>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-tertiary)", marginBottom: "2.5rem" }}>
          Access your project documents, system monitoring, and maintenance schedules.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: "0.5rem" }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <User size={18} color="var(--text-tertiary)" style={{ position: "absolute", top: "50%", left: "1rem", transform: "translateY(-50%)" }} />
              <input
                type="email" required
                value={email} onChange={e => setEmail(e.target.value)}
                placeholder="client@company.com"
                style={{
                  width: "100%", background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px",
                  padding: "0.875rem 1rem 0.875rem 3rem", color: "white",
                  fontSize: "0.9375rem", transition: "all 0.2s"
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,255,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: "0.5rem" }}>
              <span>Password</span>
              <a href="#" style={{ color: "var(--cyan)", textDecoration: "none" }}>Forgot?</a>
            </label>
            <div style={{ position: "relative" }}>
              <KeyRound size={18} color="var(--text-tertiary)" style={{ position: "absolute", top: "50%", left: "1rem", transform: "translateY(-50%)" }} />
              <input
                type="password" required
                value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%", background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px",
                  padding: "0.875rem 1rem 0.875rem 3rem", color: "white",
                  fontSize: "0.9375rem", transition: "all 0.2s"
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,255,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-primary-custom" style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}>
            {loading ? "Authenticating..." : <><ArrowRight size={18} /> Sign In</>}
          </button>

        </form>

      </div>
    </div>
  );
}
