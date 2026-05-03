import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — TalkPrep",
  description:
    "TalkPrep's privacy policy. We collect only what's necessary. Your conversations are never stored on our servers and are never shared.",
  url: "https://talkprep.co/privacy",
  publisher: {
    "@type": "Organization",
    name: "TalkPrep",
    url: "https://talkprep.co",
  },
  dateModified: "2026-05-03",
  inLanguage: "en-US",
};

export default function Privacy() {
  return (
    <div className="tp-page">
      <SEO
        title="Privacy Policy — TalkPrep"
        description="TalkPrep's privacy policy. We collect only what's necessary. Your conversations are never stored on our servers and are never shared."
        canonical="/privacy"
        keywords="TalkPrep privacy, data privacy, conversation privacy, AI privacy policy, no data storage"
        schema={privacySchema}
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      />
      <SiteNav />
      <div style={{ width: "100%", height: "320px", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
        <img
          src="https://images.pexels.com/photos/7034447/pexels-photo-7034447.jpeg?auto=compress&cs=tinysrgb&w=1440"
          alt="Person working privately on a laptop in a calm, focused setting"
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%" }}
        />
      </div>
      <article className="legal-page">
        <div className="container" style={{ maxWidth: "680px" }}>
          <div className="legal-header">
            <span className="section-tag">Legal</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-date">Last updated: May 3, 2026</p>
          </div>
          <div className="legal-body">
            <p>
              TalkPrep is built on a simple principle: your most personal conversations should stay personal. This policy explains exactly what we collect, what we don't, and why.
            </p>

            <h2>What we collect</h2>
            <p>When you use TalkPrep, we collect only what is necessary to operate the service:</p>
            <ul>
              <li><strong>Account information</strong> — your email address when you sign up.</li>
              <li><strong>Usage data</strong> — basic analytics like which features you use and how often, so we can improve the product. This data is anonymised and never linked to your conversation content.</li>
              <li><strong>Payment information</strong> — handled entirely by Stripe. We never see or store your card details.</li>
            </ul>

            <h2>What we do not collect</h2>
            <p>We do not store the content of your conversations on our servers. Your prep guides, scripts, and role-play transcripts are stored locally in your browser. When you close TalkPrep, that data stays on your device — not ours.</p>
            <p>We do not sell your data. We do not share your data with third parties for advertising. We do not use your conversations to train AI models.</p>

            <h2>Session storage</h2>
            <p>
              Your conversation history is stored in your browser's local storage. This means it persists across sessions on the same device, but is not synced to our servers and is not accessible to us. If you clear your browser storage or switch devices, your history will not be available.
            </p>
            <p>Annual plan subscribers can export their history — this export happens locally, in your browser, and is not transmitted to our servers.</p>

            <h2>AI processing</h2>
            <p>
              When you use TalkPrep, your conversation inputs are sent to our AI provider to generate your prep guide and role-play responses. This transmission is encrypted. We use a reputable AI provider under a data processing agreement that prohibits them from using your data to train their models.
            </p>

            <h2>Cookies</h2>
            <p>We use essential cookies only — for authentication and to keep you signed in. We do not use advertising or tracking cookies.</p>

            <h2>Data retention</h2>
            <p>Account data (your email, subscription status) is retained for as long as your account is active. You can request deletion at any time by emailing us. We will delete your account and associated data within 30 days.</p>

            <h2>Your rights</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. You can also request a copy of your data in a portable format. To exercise any of these rights, contact us at <a href="mailto:privacy@talkprep.co">privacy@talkprep.co</a>.</p>

            <h2>Children</h2>
            <p>TalkPrep is not intended for users under 13. We do not knowingly collect data from children.</p>

            <h2>Changes to this policy</h2>
            <p>If we make material changes to this policy, we will notify you by email at least 14 days before the changes take effect. Continued use of TalkPrep after the effective date constitutes acceptance of the updated policy.</p>

            <h2>Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:privacy@talkprep.co">privacy@talkprep.co</a>. We aim to respond within 2 business days.</p>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
