import type { Metadata } from "next";
import { Suspense } from "react";
import SearchContent from "./SearchContent";

export const metadata: Metadata = {
  title: "Search — HIDRACORE Engineering",
  description: "Search our services, industries, projects and pages.",
};

/* useSearchParams in SearchContent requires a Suspense boundary */
export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main style={{ minHeight: "100vh", background: "#FFFFFF", paddingTop: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "3px solid rgba(0,130,214,0.15)", borderTopColor: "#0082D6", animation: "spin 0.8s linear infinite", margin: "0 auto 1rem" }} />
            <p style={{ color: "#718096", fontSize: "0.9375rem" }}>Loading search…</p>
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
