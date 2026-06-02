"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, ArrowRight, FileText, Wrench, Building2, FolderOpen, X } from "lucide-react";
import { searchData, SEARCH_DATA, type SearchItem } from "../lib/searchData";

const TYPE_META: Record<SearchItem["type"], { icon: React.ElementType; color: string; bg: string }> = {
  Service:  { icon: Wrench,     color: "#0082D6", bg: "rgba(0,130,214,0.08)"  },
  Industry: { icon: Building2,  color: "#2DC653", bg: "rgba(45,198,83,0.08)" },
  Project:  { icon: FolderOpen, color: "#FDB913", bg: "rgba(253,185,19,0.10)" },
  Page:     { icon: FileText,   color: "#003D6A", bg: "rgba(0,61,106,0.07)"  },
};

const TYPE_ORDER: SearchItem["type"][] = ["Service", "Industry", "Project", "Page"];

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const initialQ     = searchParams.get("q") ?? "";

  const [query,   setQuery]   = useState(initialQ);
  const [results, setResults] = useState<SearchItem[]>(() => searchData(initialQ));
  const inputRef = useRef<HTMLInputElement>(null);

  /* Re-run search on query change */
  useEffect(() => {
    setResults(searchData(query));
    /* Update URL without hard navigation */
    const url = query ? `/search?q=${encodeURIComponent(query)}` : "/search";
    window.history.replaceState(null, "", url);
  }, [query]);

  /* Auto-focus input */
  useEffect(() => { inputRef.current?.focus(); }, []);

  /* Group results by type in defined order */
  const grouped = TYPE_ORDER.reduce<Record<string, SearchItem[]>>((acc, type) => {
    const items = results.filter((r) => r.type === type);
    if (items.length) acc[type] = items;
    return acc;
  }, {});

  const hasResults = results.length > 0;
  const isEmpty    = query.trim().length > 0 && !hasResults;

  /* Suggestions shown when query is empty */
  const SUGGESTIONS = [
    "solar", "borehole", "water treatment", "irrigation", "swimming pool", "consultancy",
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#FFFFFF", paddingTop: "72px" }}>
      {/* ── Search header ── */}
      <div style={{
        background: "var(--bg-dark)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        padding: "3rem 0 2.5rem",
      }}>
        <div className="container">
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.75rem" }}>
            Search
          </p>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            {query
              ? <>Results for <span className="text-gradient">"{query}"</span></>
              : "What are you looking for?"}
          </h1>

          {/* Search input */}
          <div style={{
            position: "relative",
            maxWidth: "600px",
          }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "1.125rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-tertiary)",
                pointerEvents: "none",
              }}
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, industries, projects…"
              style={{
                width: "100%",
                height: "54px",
                paddingLeft: "3rem",
                paddingRight: query ? "3rem" : "1.25rem",
                borderRadius: "12px",
                border: "1px solid rgba(0,130,214,0.2)",
                background: "#FFFFFF",
                fontSize: "1.0625rem",
                color: "var(--text-primary)",
                outline: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,130,214,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,130,214,0.2)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.07)",
                  border: "none",
                  borderRadius: "50%",
                  width: "26px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-tertiary)",
                }}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Result count */}
          {query && (
            <p style={{ marginTop: "0.875rem", fontSize: "0.9rem", color: "var(--text-tertiary)" }}>
              {hasResults
                ? `${results.length} result${results.length !== 1 ? "s" : ""} found`
                : "No results found"}
            </p>
          )}
        </div>
      </div>

      {/* ── Results ── */}
      <div className="container" style={{ padding: "3rem 1.5rem" }}>

        {/* Suggestions (empty state) */}
        {!query && (
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Popular searches
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  style={{
                    padding: "0.5rem 1.125rem",
                    borderRadius: "99px",
                    border: "1px solid rgba(0,0,0,0.09)",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.18s",
                    textTransform: "capitalize",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,130,214,0.3)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background = "rgba(0,130,214,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Browse all categories */}
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Browse all
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.875rem" }}>
              {TYPE_ORDER.map((type) => {
                const { icon: Icon, color, bg } = TYPE_META[type];
                const count = SEARCH_DATA.filter((i) => i.type === type).length;
                return (
                  <button
                    key={type}
                    onClick={() => setQuery(type.toLowerCase())}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      padding: "1.125rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.07)",
                      background: "#FFFFFF",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${color}30`;
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>{type}s</div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>{count} items</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* No results */}
        {isEmpty && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <h3 style={{ marginBottom: "0.625rem", color: "var(--text-primary)" }}>No results for "{query}"</h3>
            <p style={{ color: "var(--text-tertiary)", marginBottom: "2rem" }}>
              Try different keywords, or browse our services below.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/solutions" className="btn-primary-custom">Browse Solutions</Link>
              <Link href="/contact" className="btn-outline-custom">Contact Us</Link>
            </div>
          </div>
        )}

        {/* Grouped results */}
        {hasResults && (
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {(Object.entries(grouped) as [SearchItem["type"], SearchItem[]][]).map(([type, items]) => {
              const { icon: Icon, color, bg } = TYPE_META[type];
              return (
                <div key={type}>
                  {/* Section heading */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.125rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
                      <Icon size={14} />
                    </div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color }}>
                      {type}s
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginLeft: "0.25rem" }}>
                      {items.length} result{items.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Result cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "1.125rem 1.25rem",
                          borderRadius: "12px",
                          border: "1px solid rgba(0,0,0,0.07)",
                          background: "#FFFFFF",
                          transition: "all 0.2s",
                          gap: "1rem",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${color}25`;
                          e.currentTarget.style.background = bg;
                          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                          e.currentTarget.style.background = "#FFFFFF";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", lineHeight: 1.45, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight size={16} style={{ color, flexShrink: 0 }} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
