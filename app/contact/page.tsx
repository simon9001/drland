"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   FORMSPREE INTEGRATION
   Replace "YOUR_FORM_ID" with your actual Formspree form ID.
   Get your form ID at https://formspree.io — create a new form and copy the ID.
   Example:  https://formspree.io/f/xpwzjqln
─────────────────────────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const SERVICES = [
  "Solar Power Solutions",
  "Borehole Drilling & Equipping",
  "Water Treatment & Design",
  "Irrigation Systems",
  "Swimming Pool Design & Construction",
  "Engineering Consultancy",
  "Chemical Supply",
  "Inverters & Electrical",
  "Pumping Systems",
  "Pipes & Fittings",
  "Other / Not sure yet",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $20,000",
  "$20,000 – $100,000",
  "$100,000+",
  "To be discussed",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", location: "", budget: "", message: "",
  });

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FFFFFF" }}>

      {/* ── Page header ── */}
      <section style={{
        padding: "5rem 0 3.5rem",
        textAlign: "center",
        background: "var(--bg-dark)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div className="container">
          <div className="section-label animate-fadeup" style={{ marginBottom: "0.875rem" }}>
            Get in Touch
          </div>
          <h1 className="animate-fadeup" style={{ margin: "0 0 1rem" }}>
            Request a Free <span className="text-gradient">Consultation</span>
          </h1>
          <p style={{ maxWidth: "500px", margin: "0 auto", fontSize: "1.0625rem", color: "var(--text-secondary)" }}>
            Tell us about your project. Our engineers will review your requirements
            and respond within one business day with a clear proposal.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}
            className="contact-grid"
          >

            {/* LEFT — contact info */}
            <div>
              <h3 style={{ marginBottom: "2rem", fontSize: "1.375rem" }}>Contact Details</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {[
                  { icon: Phone, label: "Phone",       value: "+263 77 123 4567"   },
                  { icon: Mail,  label: "Email",        value: "info@hidracore.co.zw" },
                  { icon: MapPin,label: "Head Office",  value: "Harare, Zimbabwe"   },
                  { icon: MapPin,label: "Regional",     value: "Bulawayo, Zimbabwe" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Fri · 08:00 – 17:30" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{
                        width: "42px", height: "42px", borderRadius: "11px",
                        background: "rgba(0,130,214,0.07)",
                        border: "1px solid rgba(0,130,214,0.12)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--primary)", flexShrink: 0,
                      }}>
                        <Icon size={17} strokeWidth={1.6} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-tertiary)", marginBottom: "0.2rem" }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div style={{
                height: "220px",
                borderRadius: "14px",
                background: "var(--bg-dark)",
                border: "1px solid rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.875rem",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "rgba(0,130,214,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPin size={22} color="var(--primary)" />
                </div>
                <p style={{ color: "var(--text-tertiary)", fontSize: "0.875rem", margin: 0 }}>
                  Harare, Zimbabwe
                </p>
                <a
                  href="https://maps.google.com/?q=Harare,Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 600 }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* RIGHT — form */}
            <div style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "18px",
              padding: "2.5rem",
            }}>
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%",
                    background: "rgba(45,198,83,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}>
                    <CheckCircle size={36} color="var(--emerald)" />
                  </div>
                  <h3 style={{ marginBottom: "0.75rem" }}>Enquiry Received</h3>
                  <p style={{ color: "var(--text-secondary)", maxWidth: "320px", margin: "0 auto" }}>
                    Our engineering team will review your requirements and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.375rem" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem", fontSize: "1.25rem" }}>Project Consultation Request</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
                      All fields marked * are required. We don't share your information.
                    </p>
                  </div>

                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label className="f-label">Full Name *</label>
                      <input required className="f-input" placeholder="Your full name" value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <label className="f-label">Company / Organisation</label>
                      <input className="f-input" placeholder="Optional" value={form.company} onChange={set("company")} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label className="f-label">Email Address *</label>
                      <input required type="email" className="f-input" placeholder="you@example.com" value={form.email} onChange={set("email")} />
                    </div>
                    <div>
                      <label className="f-label">Phone Number</label>
                      <input type="tel" className="f-input" placeholder="+263 77 000 0000" value={form.phone} onChange={set("phone")} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="f-label">Service Required *</label>
                    <select required className="f-input" value={form.service} onChange={set("service")}>
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label className="f-label">Project Location *</label>
                      <input required className="f-input" placeholder="City / Province" value={form.location} onChange={set("location")} />
                    </div>
                    <div>
                      <label className="f-label">Estimated Budget</label>
                      <select className="f-input" value={form.budget} onChange={set("budget")}>
                        <option value="">Select a range…</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="f-label">Project Description</label>
                    <textarea
                      rows={5}
                      className="f-input"
                      placeholder="Describe your project — site details, scale, any specific requirements…"
                      value={form.message}
                      onChange={set("message")}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <p style={{ fontSize: "0.875rem", color: "#E53E3E", margin: 0 }}>
                      Something went wrong. Please try again or email us directly at info@hidracore.co.zw
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary-custom"
                    style={{ justifyContent: "center", opacity: status === "submitting" ? 0.7 : 1 }}
                  >
                    {status === "submitting" ? "Sending…" : "Send Consultation Request"}
                    {status !== "submitting" && <Send size={15} />}
                  </button>

                  <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-tertiary)", margin: 0 }}>
                    Free consultation · No commitment · Responded to within 1 business day
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .f-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.45rem;
        }
        .f-input {
          width: 100%;
          background: var(--bg-dark);
          border: 1px solid rgba(0,0,0,0.09);
          border-radius: 9px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          transition: border-color 0.18s;
          appearance: none;
        }
        .f-input::placeholder { color: var(--text-tertiary); }
        .f-input:focus {
          border-color: var(--primary);
          outline: none;
          background: #FFFFFF;
        }
        option { background: #FFFFFF; color: var(--text-primary); }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
