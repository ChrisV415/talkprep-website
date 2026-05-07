import { Link } from "wouter";

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@talkprep",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/talkprep.info/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Mayla1086602",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589228258037",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC3oCJfkD1eCKtYB0R7rmvTg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">
            <img src="/talkprep-logo.png" alt="TalkPrep" height="52" style={{ display: "block", filter: "brightness(0) invert(1)" }} />
          </Link>
          <p className="footer-tagline">
            A private thinking partner for conversations that actually matter.
            AI-powered. Judgment-free.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <span className="footer-col-title">Product</span>
          <ul className="footer-links-list">
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/scenarios">Scenarios</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer">Open app</a></li>
          </ul>
        </div>
        <div>
          <span className="footer-col-title">Guides</span>
          <ul className="footer-links-list">
            <li><Link href="/how-to-resign-from-a-job">How to resign</Link></li>
            <li><Link href="/how-to-fire-someone">How to fire someone</Link></li>
            <li><Link href="/how-to-set-a-boundary-with-family">Set a family boundary</Link></li>
            <li><Link href="/how-to-give-difficult-feedback">Give difficult feedback</Link></li>
          </ul>
        </div>
        <div>
          <span className="footer-col-title">Company</span>
          <ul className="footer-links-list">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/faq-and-guides">FAQ & Guides</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 TalkPrep. All rights reserved.</span>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
