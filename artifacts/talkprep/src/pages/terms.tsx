import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service — TalkPrep",
  description:
    "TalkPrep's terms of service. Simple, plain language. Covers subscriptions, refunds, acceptable use, and your rights.",
  url: "https://talk-prep.cloud/terms",
  publisher: {
    "@type": "Organization",
    name: "TalkPrep",
    url: "https://talk-prep.cloud",
  },
  dateModified: "2026-05-03",
  inLanguage: "en-US",
};

export default function Terms() {
  return (
    <div className="tp-page">
      <SEO
        title="Terms of Service — TalkPrep"
        description="TalkPrep's terms of service. Simple, plain language. Covers subscriptions, the 7-day money-back guarantee, acceptable use, and your rights."
        canonical="/terms"
        keywords="TalkPrep terms, terms of service, subscription terms, refund policy, money back guarantee"
        schema={termsSchema}
        breadcrumbs={[{ name: "Terms of Service", path: "/terms" }]}
      />
      <SiteNav />
      <div style={{ width: "100%", height: "320px", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
        <img
          src="https://images.stockcake.com/public/e/0/4/e0411436-10b1-4687-bd70-2fb5f9acad70_large/partnership-through-trust-stockcake.jpg"
          alt="Two professionals shaking hands, symbolising trust and a clear agreement"
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>
      <article className="legal-page">
        <div className="container" style={{ maxWidth: "680px" }}>
          <div className="legal-header">
            <span className="section-tag">Legal</span>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-date">Last updated: May 3, 2026</p>
          </div>
          <div className="legal-body">
            <p>
              These Terms of Service govern your use of TalkPrep (talk-prep.cloud) and the TalkPrep application. By using TalkPrep, you agree to these terms. If you don't agree, please don't use the service.
            </p>

            <h2>The service</h2>
            <p>
              TalkPrep is an AI-powered conversation preparation tool. It generates scripts, anticipated responses, and practice role-plays to help you prepare for difficult conversations. TalkPrep is a preparation tool — not a substitute for professional legal, medical, or psychological advice.
            </p>

            <h2>Your account</h2>
            <p>You must provide accurate information when creating your account. You are responsible for maintaining the security of your account and for all activity that occurs under it. Notify us immediately at <a href="mailto:talkprep.info@gmail.com">talkprep.info@gmail.com</a> if you suspect unauthorised access.</p>

            <h2>Acceptable use</h2>
            <p>You agree not to use TalkPrep to:</p>
            <ul>
              <li>Generate content intended to deceive, manipulate, or harm others</li>
              <li>Prepare for conversations intended to commit fraud or illegal acts</li>
              <li>Attempt to reverse-engineer, scrape, or abuse the service</li>
              <li>Share your account with others or resell access to the service</li>
            </ul>
            <p>We reserve the right to terminate accounts that violate these terms.</p>

            <h2>Subscriptions and billing</h2>
            <p>
              TalkPrep offers a free tier (3 sessions), single-session purchases, monthly subscriptions, and annual subscriptions. Subscription fees are billed in advance. Subscriptions automatically renew unless cancelled before the renewal date.
            </p>
            <p>
              You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period — you retain access until then.
            </p>

            <h2>Refunds</h2>
            <p>
              We offer a 7-day money-back guarantee on all paid plans. If you are not satisfied within 7 days of your first payment, contact us at <a href="mailto:talkprep.info@gmail.com">talkprep.info@gmail.com</a> and we will refund you in full. After 7 days, payments are non-refundable except where required by law.
            </p>

            <h2>Your content</h2>
            <p>You own the content you provide to TalkPrep. By using the service, you grant us a limited licence to process that content solely to provide the service to you. We do not use your conversation content to train AI models and we do not share it with third parties.</p>

            <h2>Intellectual property</h2>
            <p>TalkPrep and its original content, features, and functionality are owned by TalkPrep and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of TalkPrep without our written permission.</p>

            <h2>Disclaimers</h2>
            <p>
              TalkPrep is provided "as is" without warranties of any kind. We do not guarantee that the service will be error-free, uninterrupted, or that the AI-generated scripts will achieve any particular outcome in your conversations. Conversation outcomes depend on many factors outside our control.
            </p>
            <p>TalkPrep is not a licensed therapist, counsellor, or legal adviser. For serious personal, legal, or psychological matters, please consult a qualified professional.</p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, TalkPrep shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability to you for any claim shall not exceed the amount you paid to us in the 12 months prior to the claim.
            </p>

            <h2>Changes to the service</h2>
            <p>We may modify or discontinue the service at any time with reasonable notice. We will not refund subscription fees for changes made during an active subscription period unless we discontinue the service entirely.</p>

            <h2>Changes to these terms</h2>
            <p>We may update these terms from time to time. Material changes will be communicated by email at least 14 days before they take effect. Continued use of TalkPrep after the effective date constitutes acceptance.</p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which TalkPrep is incorporated. Any disputes shall be resolved through binding arbitration, except where prohibited by applicable law.</p>

            <h2>Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:talkprep.info@gmail.com">talkprep.info@gmail.com</a>.</p>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
