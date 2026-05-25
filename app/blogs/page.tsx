"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Solar Energy Solutions in Infrastructure",
    excerpt: "Discover how solar power and grid isolation technologies are revolutionizing the way we think about sustainable energy for large-scale projects.",
    date: "May 25, 2026",
    author: "Engineering Team",
    category: "Energy",
    imageAccent: "#FFB547"
  },
  {
    id: 2,
    title: "Advancements in Borehole Drilling and Equipping",
    excerpt: "A deep dive into the latest geophysical survey techniques and sustainable groundwater extraction methods ensuring long-term yield.",
    date: "May 18, 2026",
    author: "Water Systems Dept",
    category: "Water Solutions",
    imageAccent: "#A78BFA"
  },
  {
    id: 3,
    title: "Efficient Irrigation: Drip vs Overhead Sprinklers",
    excerpt: "Which irrigation system is right for your agricultural needs? We compare drip systems with overhead sprinklers for optimal water management.",
    date: "May 10, 2026",
    author: "Agriculture Tech",
    category: "Irrigation",
    imageAccent: "#00E5A0"
  }
];

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

export default function BlogsPage() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--bg-deep)" }}>
      {/* Hero Section */}
      <section style={{
        padding: "6rem 0 4rem", textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-void)",
      }}>
        <div className="bg-mesh" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        
        <div className="container animate-fadeup" style={{ position: "relative" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Insights & News</div>
          <h1 style={{ margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Our Latest <span className="text-gradient">Blogs</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.125rem", color: "var(--text-secondary)" }}>
            Stay updated with our latest engineering insights, project news, and industry advancements.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section style={{ padding: "5rem 0", background: "var(--bg-deep)", position: "relative" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {BLOG_POSTS.map((post, idx) => (
              <BlogCard key={post.id} post={post} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post, delay }: { post: typeof BLOG_POSTS[0], delay: number }) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "16px",
      transform: visible ? "translateY(0)" : "translateY(20px)",
      opacity: visible ? 1 : 0,
      transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.2)`;
      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(20px)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
    }}
    >
      {/* Image Placeholder */}
      <div style={{
        height: "200px",
        background: `linear-gradient(135deg, ${post.imageAccent}20, ${post.imageAccent}05)`,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: post.imageAccent,
        position: "relative"
      }}>
        <div style={{
          position: "absolute", top: "1rem", left: "1rem",
          background: "rgba(0,0,0,0.6)", padding: "0.25rem 0.75rem",
          borderRadius: "99px", fontSize: "0.75rem", fontWeight: 600,
          color: "white", border: "1px solid rgba(255,255,255,0.1)"
        }}>
          {post.category}
        </div>
        <BookOpen size={48} opacity={0.5} />
      </div>

      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-tertiary)", fontSize: "0.85rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Calendar size={14} /> {post.date}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <User size={14} /> {post.author}
          </div>
        </div>

        <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.4 }}>
          {post.title}
        </h3>
        
        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "1.5rem", flex: 1 }}>
          {post.excerpt}
        </p>

        <Link href="#" style={{ 
          display: "inline-flex", alignItems: "center", gap: "0.5rem", 
          color: post.imageAccent, fontSize: "0.9rem", fontWeight: 600, 
          textDecoration: "none", marginTop: "auto" 
        }}>
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
