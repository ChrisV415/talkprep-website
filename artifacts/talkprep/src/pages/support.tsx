import { useState } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { RocketLaunch, Lock, CreditCard } from "@phosphor-icons/react";

const supportFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click 'Start free' from any page — no credit card required. Your first 3 sessions are completely free. Describe your situation, and TalkPrep will generate your prep guide in under a minute.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as a session in TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A session is one full conversation prep: one situation, one set of scripts, one role-play. Each session covers a specific conversation — for example, your resignation meeting, or a salary negotiation with your manager.",
      },
    },
    {
      "@type": "Question",
      name: "Who can see my conversations on TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nobody. Your prep guides and role-play transcripts are stored locally in your browser — not on our servers. TalkPrep never sees your conversation content and never shares it.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data used to train AI by TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TalkPrep uses a reputable AI provider under a data processing agreement that explicitly prohibits using your data to train AI models.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a credit card to start TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your first 3 sessions are completely free with no card required. You only need to add payment when you want to continue after your free sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Does TalkPrep offer a money-back guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 7 days, full refund, no questions asked. If you subscribe and aren't satisfied within 7 days, email talkprep.info@gmail.com and we'll refund you immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cancel my TalkPrep subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel anytime from your account settings. No cancellation fee, no questions asked. You keep access until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "What conversation types does TalkPrep cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TalkPrep currently covers 11 conversation types: resignations, salary negotiations, giving difficult feedback, performance reviews, family boundaries, relationship conversations, confronting a friend, firing someone, delivering bad news to a client, negotiating, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does TalkPrep offer team or HR pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TalkPrep offers team plans at $6–8 per manager per month. Email talkprep.info@gmail.com to discuss your team's needs.",
      },
    },
    {
      "@type": "Question",
      name: "How realistic is the TalkPrep role-play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very realistic. You set the other person's emotional state, defensiveness level, and communication style before the practice session. The AI plays them accordingly and won't just roll over — it pushes back the way a real person would.",
      },
    },
  ],
};

const supportPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TalkPrep Help Center — Support & FAQ",
  description:
    "Answers to common questions about TalkPrep — getting started, privacy, billing, and using the product.",
  url: "https://talkprep.co/support",
  publisher: {
    "@type": "Organization",
    name: "TalkPrep",
    url: "https://talkprep.co",
  },
  inLanguage: "en-US",
};

const faqs = [
  {
    category: "Getting started",
    items: [
      {
        q: "How do I get started?",
        a: "Click 'Start free' from any page — no credit card required. Your first 3 sessions are completely free. Describe your situation, and TalkPrep will generate your prep guide in under a minute.",
      },
      {
        q: "What counts as a 'session'?",
        a: "A session is one full conversation prep: one situation, one set of scripts, one role-play. Each session covers a specific conversation — for example, your resignation meeting, or a salary negotiation with your manager.",
      },
      {
        q: "How long does prep take?",
        a: "Most people complete their prep in under 5 minutes. The more specific you are about your situation, the better your prep will be — so it's worth taking an extra minute to give context.",
      },
      {
        q: "Does TalkPrep work on mobile?",
        a: "Yes. TalkPrep works in any modern mobile browser. A dedicated mobile app is in development.",
      },
    ],
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "Who can see my conversations?",
        a: "Nobody. Your prep guides and role-play transcripts are stored locally in your browser — not on our servers. We never see your conversation content and we never share it.",
        link: { label: "Read our full Privacy Policy", href: "/privacy" },
      },
      {
        q: "Is my data used to train AI?",
        a: "No. We use a reputable AI provider under a data processing agreement that explicitly prohibits using your data to train AI models.",
      },
      {
        q: "What happens to my history if I cancel?",
        a: "Your session history is stored in your browser's local storage — it stays on your device regardless of your subscription status. Annual subscribers can export their history before cancelling.",
      },
      {
        q: "Can I delete my account and data?",
        a: "Yes. Email privacy@talkprep.co and we will delete your account and any associated data within 30 days.",
      },
    ],
  },
  {
    category: "Billing & plans",
    items: [
      {
        q: "Do I need a credit card to start?",
        a: "No. Your first 3 sessions are completely free with no card required. You only need to add payment when you want to continue after your free sessions.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel anytime from your account settings. No cancellation fee, no questions asked. You keep access until the end of your current billing period.",
      },
      {
        q: "Is there a money-back guarantee?",
        a: "Yes — 7 days, full refund, no questions asked. If you subscribe and aren't satisfied within 7 days, email talkprep.info@gmail.com and we'll refund you immediately.",
      },
      {
        q: "Do you offer team or HR pricing?",
        a: "Yes. We offer team plans at $6–8 per manager per month. Email talkprep.info@gmail.com to discuss your team's needs.",
      },
    ],
  },
  {
    category: "Using TalkPrep",
    items: [
      {
        q: "What conversation types does TalkPrep cover?",
        a: "TalkPrep currently covers 11 conversation types: resignations, salary negotiations, giving difficult feedback, performance reviews, family boundaries, relationship conversations, confronting a friend, firing someone, delivering bad news to a client, negotiating, and more.",
        link: { label: "See all scenarios", href: "/scenarios" },
      },
      {
        q: "How realistic is the role-play?",
        a: "Very. You set the other person's emotional state, defensiveness level, and communication style before the practice session. The AI plays them accordingly and won't just roll over — it pushes back the way a real person would.",
      },
      {
        q: "What if my situation doesn't fit any of the scenarios?",
        a: "The free-form input mode handles any conversation type. Just describe the situation in your own words and TalkPrep will build your prep from scratch.",
      },
      {
        q: "Can I redo or adjust my prep guide?",
        a: "Yes. You can regenerate sections of your prep guide, adjust the tone or approach, or start over with different context. Sessions are not locked once generated.",
      },
    ],
  },
];

export default function Support() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="tp-page">
      <SEO
        title="Support — TalkPrep Help Center"
        description="Answers to common questions about TalkPrep — getting started, privacy, billing, and using the product. Can't find what you need? Email us."
        canonical="/support"
        keywords="TalkPrep help, TalkPrep support, TalkPrep FAQ, TalkPrep questions, conversation prep help, how does TalkPrep work, TalkPrep refund, TalkPrep privacy"
        schema={[supportPageSchema, supportFaqSchema]}
        breadcrumbs={[{ name: "Support", path: "/support" }]}
      />
      <SiteNav />
      <section className="support-hero">
        <div className="container">
          <span className="section-tag" style={{ display: "block", marginBottom: "0.5rem" }}>Help Center</span>
          <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>How can we help?</h1>
          <p className="section-hint" style={{ maxWidth: "440px", margin: "0 auto" }}>
            Answers to the most common questions. Can't find what you need?{" "}
            <a href="mailto:talkprep.info@gmail.com" style={{ color: "var(--rust)", textDecoration: "none" }}>Email us directly.</a>
          </p>
        </div>
      </section>
      <div style={{ width: "100%", height: "380px", overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <img
          src="https://images.pexels.com/photos/9050619/pexels-photo-9050619.jpeg?auto=compress&cs=tinysrgb&w=1440"
          alt="Two people having a warm, helpful conversation through a café window"
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%" }}
        />
      </div>
      <section className="section section-alt" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="support-grid">
            <div className="support-card">
              <div className="support-card-icon"><RocketLaunch weight="duotone" size={34} color="var(--rust)" /></div>
              <h3>Getting started</h3>
              <p>New to TalkPrep? Start here to learn how it works and get your first prep done in under 5 minutes.</p>
              <Link href="/how-it-works" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.85rem", color: "var(--rust)", textDecoration: "none", fontWeight: 600 }}>How it works →</Link>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><Lock weight="duotone" size={34} color="var(--rust)" /></div>
              <h3>Privacy & security</h3>
              <p>Your conversations are stored locally in your browser — not on our servers. Nobody sees your prep but you.</p>
              <Link href="/privacy" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.85rem", color: "var(--rust)", textDecoration: "none", fontWeight: 600 }}>Privacy policy →</Link>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><CreditCard weight="duotone" size={34} color="var(--rust)" /></div>
              <h3>Billing & plans</h3>
              <p>Start free, no card needed. Cancel anytime. 7-day money-back guarantee on all paid plans.</p>
              <Link href="/pricing" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.85rem", color: "var(--rust)", textDecoration: "none", fontWeight: 600 }}>See pricing →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Frequently asked questions</h2>
          <p className="section-hint" style={{ marginBottom: "3rem" }}>Everything you might want to know before or after signing up.</p>

          {faqs.map((group) => (
            <div key={group.category} style={{ marginBottom: "3rem" }}>
              <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>{group.category}</h3>
              <div className="support-accordion">
                {group.items.map((item, i) => {
                  const key = `${group.category}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className="support-acc-item">
                      <button
                        className="support-acc-btn"
                        onClick={() => setOpen(isOpen ? null : key)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span style={{ color: "var(--rust)", flexShrink: 0, marginLeft: "1rem", transition: "transform 0.2s", display: "inline-block", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                      </button>
                      {isOpen && (
                        <div className="support-acc-body">
                          <p>{item.a}</p>
                          {"link" in item && item.link && (
                            <Link href={item.link.href} style={{ color: "var(--rust)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
                              {item.link.label} →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="contact-strip">
        <div className="container">
          <h2 className="text-[#1b1815]">Still have questions?</h2>
          <p className="text-[#1b1815]">We're a small team and we read every email. Usually reply within a few hours.</p>
          <div className="contact-options">
            <a href="mailto:talkprep.info@gmail.com" className="btn btn-rust btn-lg">Email us →</a>
            <Link href="/how-it-works" className="btn btn-secondary btn-lg text-[#1b1815]" style={{ color: "rgba(249,245,239,0.9)", borderColor: "rgba(249,245,239,0.35)" }}>How it works</Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
