import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">
            Talk<span>Prep</span>
          </Link>
          <p className="footer-tagline">
            A private thinking partner for conversations that actually matter.
            AI-powered. Judgment-free.
          </p>
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
            <li><Link href="/guides">All guides</Link></li>
          </ul>
        </div>
        <div>
          <span className="footer-col-title">Company</span>
          <ul className="footer-links-list">
            <li><Link href="/about">About</Link></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 TalkPrep. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
