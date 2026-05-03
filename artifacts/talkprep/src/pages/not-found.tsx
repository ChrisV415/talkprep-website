import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | TalkPrep</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="tp-page" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rust)", marginBottom: "1rem", display: "block" }}>
          404
        </span>
        <h1 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          This page doesn't exist.
        </h1>
        <p style={{ fontSize: "0.95rem", color: "var(--ink3)", maxWidth: "340px", lineHeight: 1.7, marginBottom: "2rem" }}>
          It may have moved, or the link might be wrong. Head back to the homepage.
        </p>
        <Link href="/" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.875rem", fontWeight: 500, background: "var(--ink)", color: "var(--cream)", padding: "10px 24px", borderRadius: "3px", textDecoration: "none" }}>
          ← Back to TalkPrep
        </Link>
      </div>
    </>
  );
}
