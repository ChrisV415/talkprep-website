import { useEffect, useState } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { Door, CurrencyDollar, ChatCircle, UsersThree, Heart, ClipboardText, Handshake, Prohibit, Megaphone, House, PlusCircle } from "@phosphor-icons/react";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("in");
            obs.unobserve(el.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".tp-page .reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const guides = [
  { href: "/how-to-resign-from-a-job", title: "How to Resign from a Job (With Exact Scripts)", desc: "Opening script, counter-offer handling, the resignation email, and what to do the day after.", tag: "Career", icon: <Door weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-confront-a-friend", title: "How to Confront a Friend (Without Losing the Friendship)", desc: "Most friendships don't end in fights — they fade because no one was willing to say the thing.", tag: "Friendship", icon: <Handshake weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-set-a-boundary-with-family", title: "How to Set a Boundary With a Family Member", desc: "What to actually say to someone you love — without the guilt spiral that usually follows.", tag: "Family", icon: <Prohibit weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-fire-someone", title: "How to Fire Someone With Dignity", desc: "The conversation nobody wants to have — done with clarity, legality, and humanity.", tag: "Management", icon: <ClipboardText weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-give-difficult-feedback", title: "How to Give Difficult Feedback That Actually Lands", desc: "The truth, said directly — honest without being cruel, actionable without being vague.", tag: "Management", icon: <ChatCircle weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-have-a-performance-review-conversation", title: "How to Have a Performance Review Conversation", desc: "Make reviews honest, motivating, and actually useful to the person sitting across from you.", tag: "Management", icon: <UsersThree weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-tell-partner-something-difficult", title: "How to Tell Your Partner Something Difficult", desc: "The conversation you've been avoiding. Said with care, not fear — and without it becoming a fight.", tag: "Relationships", icon: <Heart weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-deliver-bad-news-to-a-client", title: "How to Deliver Bad News to a Client", desc: "Delays, missed targets, mistakes — things go wrong. What matters is how you deliver the news.", tag: "Management", icon: <Megaphone weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-give-negative-feedback-that-actually-lands", title: "How to Give Negative Feedback That Actually Lands", desc: "The four-part structure between meaningless softness and defensiveness-triggering bluntness.", tag: "Career", icon: <ChatCircle weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/how-to-negotiate-anything", title: "How to Negotiate Anything (Without Feeling Like a Jerk)", desc: "Scripts for salary, rent, contractor quotes, and any negotiation where you want better terms.", tag: "Negotiation", icon: <CurrencyDollar weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/why-you-freeze-in-hard-conversations", title: "Why You Freeze in Hard Conversations (And What to Do)", desc: "The neuroscience behind going blank under pressure — and the rehearsal technique that works.", tag: "Psychology", icon: <House weight="duotone" size={22} color="var(--rust)" /> },
  { href: "/guides", title: "Ask for a Raise (Word-for-Word Scripts)", desc: "Anchor your number, handle 'not right now,' and know when to walk away.", tag: "Career", icon: <PlusCircle weight="duotone" size={22} color="var(--ink4)" />, soon: true },
];

const faqs = [
  {
    category: "Getting started",
    items: [
      { q: "How do I get started?", a: "Click 'Start free' from any page — no credit card required. Your first 3 sessions are completely free. Describe your situation, and TalkPrep will generate your prep guide in under a minute." },
      { q: "What counts as a 'session'?", a: "A session is one full conversation prep: one situation, one set of scripts, one role-play. Each session covers a specific conversation — for example, your resignation meeting, or a salary negotiation with your manager." },
      { q: "How long does prep take?", a: "Most people complete their prep in under 5 minutes. The more specific you are about your situation, the better your prep will be — so it's worth taking an extra minute to give context." },
      { q: "Does TalkPrep work on mobile?", a: "Yes. TalkPrep works in any modern mobile browser. A dedicated mobile app is in development." },
    ],
  },
  {
    category: "Privacy & data",
    items: [
      { q: "Who can see my conversations?", a: "Nobody. Your prep guides and role-play transcripts are stored locally in your browser — not on our servers. We never see your conversation content and we never share it.", link: { label: "Read our full Privacy Policy", href: "/privacy" } },
      { q: "Is my data used to train AI?", a: "No. We use a reputable AI provider under a data processing agreement that explicitly prohibits using your data to train AI models." },
      { q: "What happens to my history if I cancel?", a: "Your session history is stored in your browser's local storage — it stays on your device regardless of your subscription status. Annual subscribers can export their history before cancelling." },
      { q: "Can I delete my account and data?", a: "Yes. Email privacy@talkprep.co and we will delete your account and any associated data within 30 days." },
    ],
  },
  {
    category: "Billing & plans",
    items: [
      { q: "Do I need a credit card to start?", a: "No. Your first 3 sessions are completely free with no card required. You only need to add payment when you want to continue after your free sessions." },
      { q: "How do I cancel my subscription?", a: "You can cancel anytime from your account settings. No cancellation fee, no questions asked. You keep access until the end of your current billing period." },
      { q: "Is there a money-back guarantee?", a: "Yes — 7 days, full refund, no questions asked. If you subscribe and aren't satisfied within 7 days, email hello@talkprep.co and we'll refund you immediately." },
      { q: "Do you offer team or HR pricing?", a: "Yes. We offer team plans at $6–8 per manager per month. Email hello@talkprep.co to discuss your team's needs." },
    ],
  },
  {
    category: "Using TalkPrep",
    items: [
      { q: "What conversation types does TalkPrep cover?", a: "TalkPrep currently covers 11 conversation types: resignations, salary negotiations, giving difficult feedback, performance reviews, family boundaries, relationship conversations, confronting a friend, firing someone, delivering bad news to a client, negotiating, and more.", link: { label: "See all scenarios", href: "/scenarios" } },
      { q: "How realistic is the role-play?", a: "Very. You set the other person's emotional state, defensiveness level, and communication style before the practice session. The AI plays them accordingly and won't just roll over — it pushes back the way a real person would." },
      { q: "What if my situation doesn't fit any of the scenarios?", a: "The free-form input mode handles any conversation type. Just describe the situation in your own words and TalkPrep will build your prep from scratch." },
      { q: "Can I redo or adjust my prep guide?", a: "Yes. You can regenerate sections of your prep guide, adjust the tone or approach, or start over with different context. Sessions are not locked once generated." },
    ],
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqGuides() {
  useReveal();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="tp-page">
      <SEO
        title="FAQ & Guides — TalkPrep"
        description="Answers to common questions about TalkPrep, plus free word-for-word scripts and guides for the hardest conversations: resignations, raises, feedback, family boundaries, and more."
        canonical="/faq-and-guides"
        keywords="TalkPrep FAQ, conversation guides, difficult conversation scripts, how to resign, how to give feedback, TalkPrep help"
        schema={pageSchema}
        breadcrumbs={[{ name: "FAQ & Guides", path: "/faq-and-guides" }]}
      />
      <SiteNav />

      {/* HERO */}
      <section className="page-hero" style={{ textAlign: "center", paddingBottom: "3rem" }}>
        <div className="container">
          <span className="section-tag">Resources</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,2.75rem)", marginBottom: "0.75rem" }}>
            FAQ & Guides
          </h1>
          <p className="section-hint" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Answers to common questions, plus free word-for-word scripts for every hard conversation.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "1.75rem", flexWrap: "wrap" }}>
            <a href="#guides" className="btn btn-rust">Browse guides →</a>
            <a href="#faq" className="btn btn-secondary">Jump to FAQ</a>
          </div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section id="guides" className="section section-alt" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-tag reveal" style={{ display: "block", marginBottom: "0.4rem" }}>Guides</span>
              <h2 className="section-title reveal" style={{ fontSize: "1.6rem", marginBottom: 0 }}>Scripts for the conversations everyone is Googling.</h2>
            </div>
            <Link href="/guides" style={{ fontSize: "0.85rem", color: "var(--rust)", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>See all guides →</Link>
          </div>

          <div className="fag-guide-grid reveal">
            {guides.map((g, i) => (
              g.soon ? (
                <div key={i} className="fag-guide-card fag-guide-card--soon">
                  <div className="fag-guide-icon">{g.icon}</div>
                  <div>
                    <span className="fag-guide-tag">Coming soon</span>
                    <h3 className="fag-guide-title">{g.title}</h3>
                    <p className="fag-guide-desc">{g.desc}</p>
                  </div>
                </div>
              ) : (
                <Link key={g.href} href={g.href} className="fag-guide-card">
                  <div className="fag-guide-icon">{g.icon}</div>
                  <div>
                    <span className="fag-guide-tag">{g.tag}</span>
                    <h3 className="fag-guide-title">{g.title}</h3>
                    <p className="fag-guide-desc">{g.desc}</p>
                  </div>
                  <span className="fag-guide-arrow">→</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "0 2.5rem" }} />

      {/* FAQ SECTION */}
      <section id="faq" className="section" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-tag reveal" style={{ display: "block", marginBottom: "0.4rem" }}>FAQ</span>
            <h2 className="section-title reveal" style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>Frequently asked questions</h2>
            <p className="section-hint reveal">
              Can't find what you need?{" "}
              <a href="mailto:hello@talkprep.co" style={{ color: "var(--rust)", textDecoration: "none" }}>Email us directly</a> — we read every one.
            </p>
          </div>

          {faqs.map((group) => (
            <div key={group.category} style={{ marginBottom: "3rem" }} className="reveal">
              <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>
                {group.category}
              </h3>
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
                        <span className="support-acc-icon" style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                      </button>
                      {isOpen && (
                        <div className="support-acc-body">
                          <p>{item.a}</p>
                          {"link" in item && item.link && (
                            <Link href={item.link.href} style={{ color: "var(--rust)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}>
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

      {/* CTA STRIP */}
      <div className="contact-strip">
        <div className="container">
          <h2>Ready to prepare?</h2>
          <p>Start free — no credit card needed. Your first 3 sessions are on us.</p>
          <div className="contact-options">
            <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust btn-lg">Start free →</a>
            <Link href="/how-it-works" className="btn btn-secondary btn-lg" style={{ color: "var(--cream)", borderColor: "rgba(249,245,239,0.35)" }}>How it works</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
