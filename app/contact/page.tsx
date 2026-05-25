"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Upload } from "lucide-react";

const SERVICES = [
  "Solar & Energy Systems",
  "Borehole Drilling",
  "Water Treatment",
  "Irrigation Systems",
  "Swimming Pool Construction",
  "Engineering Consultancy",
];

const BUDGETS = ["< $5,000", "$5,000–$20,000", "$20,000–$100,000", "$100,000+", "To be discussed"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", location: "", budget: "", message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section style={{
        padding: "6rem 0 4rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label animate-fadeup" style={{ marginBottom: "1.25rem" }}>Let's Talk</div>
          <h1 className="animate-fadeup delay-100" style={{ margin: "0" }}>
            Start Your <span className="text-gradient">Project</span>
          </h1>
          <p className="animate-fadeup delay-200" style={{ maxWidth: "520px", margin: "1rem auto 0", fontSize: "1.0625rem" }}>
            Tell us about your project. Our engineers will review your requirements 
            and respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
            
            {/* LEFT — Info */}
            <div className="animate-fadein delay-300">
              <h3 style={{ marginBottom: "2.5rem", fontSize: "1.5rem" }}>Contact Information</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "4rem" }}>
                {[
                  { icon: Phone, label: "Phone", value: "+263 77 123 4567" },
                  { icon: Mail, label: "Email", value: "info@hidracore.co.zw" },
                  { icon: MapPin, label: "Head Office", value: "Harare, Zimbabwe" },
                  { icon: MapPin, label: "Regional Office", value: "Bulawayo, Zimbabwe" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 8:00–17:30" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "12px",
                        background: "rgba(0,194,255,0.08)", border: "1px solid rgba(0,194,255,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--cyan)", flexShrink: 0,
                      }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginBottom: "0.2rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.9375rem" }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map card */}
              <div style={{
                height: "260px", borderRadius: "20px",
                background: "linear-gradient(145deg, rgba(13,21,48,0.6), rgba(6,12,24,0.8))",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "1rem",
              }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0,194,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={24} color="var(--cyan)" />
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                  Interactive map placeholder
                </p>
                <a href="#" style={{ fontSize: "0.8125rem", color: "var(--cyan)", fontWeight: 600, textDecoration: "underline" }}>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="glass-card animate-fadeup delay-400" style={{ padding: "3rem", background: "rgba(10,16,34,0.6)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "4rem 0" }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0,229,160,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <CheckCircle size={40} color="var(--emerald)" />
                  </div>
                  <h3 style={{ marginBottom: "1rem" }}>Message Received</h3>
                  <p style={{ color: "var(--text-secondary)", maxWidth: "340px", margin: "0 auto" }}>
                    Our engineering team will review your requirements and respond
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <h4 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
                    Project Consultation Request
                  </h4>

                  {/* 2-col group */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-group">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input required className="form-input" placeholder="John Doe" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Company</label>
                      <input className="form-input" placeholder="Optional" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} />
                    </div>
                  </div>

                  {/* 2-col group */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-group">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input required type="email" className="form-input" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" placeholder="+263 77 000 0000" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>

                  {/* Full width */}
                  <div>
                    <label className="form-label">Service Needed *</label>
                    <select required className="form-input" value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} style={{ appearance: "none" }}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* 2-col group */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-group">
                    <div>
                      <label className="form-label">Project Location *</label>
                      <input required className="form-input" placeholder="City, Province" value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Estimated Budget</label>
                      <select className="form-input" value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})} style={{ appearance: "none" }}>
                        <option value="">Select range...</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="form-label">Project Description</label>
                    <textarea
                      rows={5} className="form-input"
                      placeholder="Describe your project, requirements, site details..."
                      value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* Upload */}
                  <div style={{
                    border: "1px dashed rgba(255,255,255,0.15)", borderRadius: "12px",
                    padding: "2rem", textAlign: "center",
                    cursor: "pointer", transition: "all 0.2s",
                    background: "rgba(255,255,255,0.01)"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,194,255,0.4)"; e.currentTarget.style.background = "rgba(0,194,255,0.02)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.01)"; }}>
                    <Upload size={24} color="var(--text-tertiary)" style={{ margin: "0 auto 0.75rem" }} />
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
                      Upload site plans or images (optional)
                    </p>
                  </div>

                  <button type="submit" className="btn-primary-custom" style={{ width: "100%", justifyContent: "center", padding: "1rem", marginTop: "0.5rem" }}>
                    Send Consultation Request <Send size={16} />
                  </button>

                  <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-tertiary)", margin: 0 }}>
                    Free consultation · No commitment · 24-hour response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .form-label {
          display: block; font-size: 0.8125rem; font-weight: 600;
          color: var(--text-tertiary); margin-bottom: 0.5rem; letter-spacing: 0.03em;
        }
        .form-input {
          width: 100%; background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;
          padding: 0.875rem 1.125rem; color: var(--text-primary);
          font-family: var(--font-body); font-size: 0.9375rem;
          transition: all 0.2s;
        }
        .form-input::placeholder { color: var(--text-tertiary); }
        .form-input:focus { border-color: rgba(0,194,255,0.5); outline: none; box-shadow: 0 0 0 3px rgba(0,194,255,0.1); }
        option { background: var(--bg-card); color: var(--text-primary); }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-group { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
