import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { label: "How it works", path: "/how-it-works" },
    { label: "Scenarios", path: "/scenarios" },
    { label: "Guides", path: "/guides" },
    { label: "Blog", path: "/blog" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="nav-logo">
          Talk<span>Prep</span>
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
