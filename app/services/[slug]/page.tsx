import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SERVICES_DETAIL, getServiceBySlug } from "../../lib/servicesData";

/* Static params for build */
export async function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

/* Per-page metadata */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: `${svc.title} — HIDRACORE Engineering`,
    description: svc.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const Icon = svc.icon;

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FFFFFF" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0 4rem",
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          overflow: "hidden",
        }}
      >
        {/* Subtle background tint */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 10% -10%, ${svc.accentColor}08 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.8125rem",
            color: "var(--text-tertiary)",
            marginBottom: "2rem",
          }}>
            <Link href="/" style={{ color: "var(--text-tertiary)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={13} />
            <Link href="/services" style={{ color: "var(--text-tertiary)", textDecoration: "none" }}>Services</Link>
            <ChevronRight size={13} />
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{svc.title}</span>
          </div>

          {/* Icon + title */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: `${svc.accentColor}14`,
              border: `1px solid ${svc.accentColor}28`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: svc.accentColor,
              flexShrink: 0,
            }}>
              <Icon size={30} strokeWidth={1.5} />
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.5rem" }}>
                HIDRACORE Engineering
              </div>
              <h1 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
                {svc.title}
              </h1>
            </div>
          </div>

          <p style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            maxWidth: "680px",
            lineHeight: 1.6,
            marginBottom: "2rem",
            fontWeight: 400,
          }}>
            {svc.tagline}
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href={`/contact?service=${svc.slug}`} className="btn-primary-custom">
              Request a Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn-outline-custom">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section style={{ padding: "5rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="overview-grid">
            <div>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Overview</div>
              <h2 style={{ margin: "0 0 1.25rem", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                What we do
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                {svc.overview}
              </p>
            </div>
            <div style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4/3",
              border: "1px solid rgba(0,0,0,0.07)",
            }}>
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How we do it ── */}
      <section style={{ padding: "5rem 0", background: "var(--bg-dark)" }}>
        <div className="divider-glow" style={{ position: "relative", top: 0 }} />
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.875rem" }}>Our Approach</div>
            <h2 style={{ margin: "0 0 0.875rem" }}>How we work</h2>
            <p style={{ maxWidth: "460px", margin: "0 auto", fontSize: "1rem", color: "var(--text-tertiary)" }}>
              A transparent, step-by-step process — managed entirely by our in-house team.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
            className="steps-grid"
          >
            {svc.steps.map((step, i) => (
              <div
                key={i}
                style={{
                  padding: "1.625rem",
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: `${svc.accentColor}22`,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}>
                    {step.step}
                  </span>
                </div>
                <h4 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-tertiary)", lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope ── */}
      <section style={{ padding: "5rem 0", background: "#FFFFFF" }}>
        <div className="divider-glow" />
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="scope-grid">
            <div>
              <div className="section-label" style={{ marginBottom: "0.875rem" }}>Scope of Work</div>
              <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                What we include
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                Every item listed below is handled and supplied by our team — no third-party contractors, no equipment sourced by you.
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {svc.scope.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    paddingBottom: "0.625rem",
                    borderBottom: i < svc.scope.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <Check size={15} color={svc.accentColor} style={{ flexShrink: 0, marginTop: "3px" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section style={{ padding: "5rem 0", background: "var(--bg-dark)" }}>
        <div className="divider-glow" />
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.875rem" }}>Applications</div>
            <h2 style={{ margin: "0 0 0.875rem" }}>Who we work with</h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
            className="apps-grid"
          >
            {svc.applications.map((app, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "14px",
                }}
              >
                <div style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: svc.accentColor,
                  marginBottom: "0.4rem",
                  letterSpacing: "0.01em",
                }}>
                  {app.sector}
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-tertiary)", lineHeight: 1.5 }}>
                  {app.examples}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 0", background: "#FFFFFF" }}>
        <div className="divider-glow" />
        <div className="container">
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            padding: "3rem",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "18px",
            background: "var(--bg-dark)",
          }}>
            <div style={{ maxWidth: "560px" }}>
              <h3 style={{ margin: "0 0 0.625rem", fontSize: "1.5rem" }}>
                Ready to discuss your {svc.title.toLowerCase()} project?
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                Contact our engineers for a free initial consultation. We'll assess your site, understand your requirements, and come back with a clear proposal.
              </p>
            </div>
            <Link
              href={`/contact?service=${svc.slug}`}
              className="btn-primary-custom"
              style={{ flexShrink: 0 }}
            >
              Request a Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .overview-grid { grid-template-columns: 1fr !important; }
          .scope-grid    { grid-template-columns: 1fr !important; }
          .steps-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .apps-grid     { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .apps-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
