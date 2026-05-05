import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announced, setAnnounced] = useState(true);

  const tabs = [
    { label: "How it works", path: "/how-it-works" },
    { label: "Scenarios", path: "/scenarios" },
    { label: "Blog", path: "/blog" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      {announced && (
        <div className="announce-bar">
          <span>🎉 Negotiation & client conversation prep now live</span>
          <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer">Try it free →</a>
          <button className="announce-close" onClick={() => setAnnounced(false)} aria-label="Dismiss">✕</button>
        </div>
      )}
      <nav className="site-nav">
        <Link href="/" className="nav-logo">
          <img src="/talkprep-logo.png" alt="TalkPrep" height="28" style={{ display: "block" }} />
        </Link>
        <div className={`nav-center${mobileOpen ? " nav-center-open" : ""}`}>
          {tabs.map((t) => (
            <Link
              key={t.path}
              href={t.path}
              className={`nav-tab${location === t.path ? " active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {t.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="nav-pill nav-pill-filled">
            Start free →
          </a>
          <button
            className="nav-mobile"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          {tabs.map((t) => (
            <Link
              key={t.path}
              href={t.path}
              className={`mobile-menu-link${location === t.path ? " active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {t.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
