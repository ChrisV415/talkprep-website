import { useEffect, useState } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TalkPrep Pricing Plans",
  itemListElement: [
    {
      "@type": "Offer",
      position: 1,
      name: "Single Session",
      description: "Full prep guide, role-play, and debrief for one conversation.",
      price: "4.99",
      priceCurrency: "USD",
      url: "https://talk-prep.cloud/pricing",
    },
    {
      "@type": "Offer",
      position: 2,
      name: "Monthly",
      description: "Unlimited conversations, progress dashboard, and session history.",
      price: "12.99",
      priceCurrency: "USD",
      url: "https://talk-prep.cloud/pricing",
    },
    {
      "@type": "Offer",
      position: 3,
      name: "Annual",
      description: "Everything in Monthly. Save 49%. Export history. Priority speed.",
      price: "79",
      priceCurrency: "USD",
      url: "https://talk-prep.cloud/pricing",
    },
  ],
};

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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".tp-page .reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const faqs = [
  { q: "Do I need a credit card to start?", a: "No. Your first 3 sessions are completely free with no card required. You only need payment when you've used your free sessions and want to continue." },
  { q: "Can I cancel my subscription?", a: "Yes, anytime. No questions asked, no cancellation fee. You keep access until the end of your paid period." },
  { q: "What happens to my history if I cancel?", a: "Your session history is stored locally in your browser — it doesn't disappear if you cancel. You can also export it on the Annual plan before cancelling." },
  { q: "Is there a free trial for Monthly?", a: "Your first 3 sessions are free regardless of plan — think of those as your trial. There's no long free trial beyond that." },
  { q: "Do you offer refunds?", a: "If you're not satisfied within 7 days of subscribing, contact us and we'll refund you in full — no questions asked." },
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const compareRows = [
  { feature: "Full prep guide (script + responses + fallback)", s: true, m: true, a: true },
  { feature: "Persona depth setup", s: true, m: true, a: true },
  { feature: "Role-play practice mode", s: true, m: true, a: true },
  { feature: "Live strategy nudges", s: true, m: true, a: true },
  { feature: "Annotated transcript review", s: true, m: true, a: true },
  { feature: "Outcome scoring + debrief", s: true, m: true, a: true },
  { feature: "Number of conversations", s: "1", m: "Unlimited", a: "Unlimited" },
  { feature: "Conversation history", s: false, m: true, a: true },
  { feature: "Progress dashboard", s: false, m: true, a: true },
  { feature: "Session sharing links", s: false, m: true, a: true },
  { feature: "Export history", s: false, m: false, a: true },
  { feature: "Priority speed", s: false, m: false, a: true },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <span className="ct-yes">✓</span>;
  if (val === false) return <span className="ct-no">—</span>;
  return <span className="ct-val">{val}</span>;
}

export default function Pricing() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="tp-page">
      <SEO
        title="TalkPrep Pricing — Less Than One Hour of Coaching"
        description="Single session $4.99 · Monthly $12.99 · Annual $79. First 3 sessions free, no credit card required. Cancel anytime."
        canonical="/pricing"
        keywords="TalkPrep pricing, conversation prep cost, AI coaching price, conversation prep subscription, free conversation tool"
        schema={[pricingSchema, pricingFaqSchema]}
        breadcrumbs={[{ name: "Pricing", path: "/pricing" }]}
      />
      <SiteNav />

      <section className="page-hero">
        <div className="container">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>Pricing</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", textAlign: "center", marginBottom: "0.75rem" }}>
            Less than one hour of coaching.
          </h1>
          <p className="section-hint" style={{ textAlign: "center", maxWidth: "440px", margin: "0 auto" }}>
            Three options. Start completely free — no credit card required for your first 3 sessions.
          </p>

          <div className="card-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", maxWidth: "820px", margin: "2.5rem auto 0" }}>
            <div className="plan-card cg-item-white">
              <span className="plan-badge">Pay as you go</span>
              <h2 className="plan-name">Single Session</h2>
              <div className="plan-price">$4.99</div>
              <span className="plan-per">per conversation</span>
              <ul className="plan-features">
                <li><span className="pf-check">✓</span>Full prep guide</li>
                <li><span className="pf-check">✓</span>Opening script + 3 response handlers</li>
                <li><span className="pf-check">✓</span>Persona setup + role-play</li>
                <li><span className="pf-check">✓</span>Annotated transcript review</li>
                <li><span className="pf-check">✓</span>Post-conversation debrief</li>
              </ul>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>Get started</a>
            </div>
            <div className="plan-card featured">
              <span className="plan-badge">Most popular</span>
              <h2 className="plan-name" style={{ color: "var(--cream)" }}>Monthly</h2>
              <div className="plan-price">$12.99</div>
              <span className="plan-per">per month · cancel anytime</span>
              <ul className="plan-features">
                <li><span className="pf-check">✓</span>Unlimited conversations</li>
                <li><span className="pf-check">✓</span>Full conversation history</li>
                <li><span className="pf-check">✓</span>Progress dashboard + score tracking</li>
                <li><span className="pf-check">✓</span>Curveballs mode + persona depth</li>
                <li><span className="pf-check">✓</span>Live strategy nudges</li>
                <li><span className="pf-check">✓</span>Session sharing links</li>
              </ul>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust" style={{ width: "100%", justifyContent: "center" }}>Start free trial →</a>
            </div>
            <div className="plan-card cg-item-white">
              <span className="plan-badge">Best value</span>
              <h2 className="plan-name">Annual</h2>
              <div className="plan-price">$79</div>
              <span className="plan-per">per year · $6.58/month</span>
              <ul className="plan-features">
                <li><span className="pf-check">✓</span>Everything in Monthly</li>
                <li><span className="pf-check">✓</span>Save 49% vs monthly</li>
                <li><span className="pf-check">✓</span>Export conversation history</li>
                <li><span className="pf-check">✓</span>Priority response speed</li>
              </ul>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>Get annual →</a>
            </div>
          </div>

          <div className="enterprise-row reveal">
            <div>
              <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.25rem" }}>For HR teams and people ops</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--ink3)" }}>$6–8 per employee/month. Conversation readiness for every manager on your team.</p>
            </div>
            <Link href="/about" className="btn btn-secondary btn-sm">Talk to us →</Link>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontFamily: "'DM Mono',monospace", fontSize: "9px", color: "var(--ink4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            First 3 sessions free · No credit card required
          </p>
          <div className="guarantee-badge">
            <span className="guarantee-icon">🛡️</span>
            <div>
              <strong>7-day money-back guarantee</strong>
              <span>Not happy within 7 days? Full refund, no questions asked.</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", background: "var(--cream2)" }}>
        <div className="container-md">
          <span className="section-tag reveal" style={{ textAlign: "center", display: "block" }}>Compare plans</span>
          <h2 className="section-title reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>Everything in one place.</h2>
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }} className="reveal">
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: "40%", textAlign: "left" }}>Feature</th>
                  <th>Single</th>
                  <th>Monthly</th>
                  <th>Annual</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td><Cell val={row.s} /></td>
                    <td><Cell val={row.m} /></td>
                    <td><Cell val={row.a} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div style={{ width: "100%", height: "320px", overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <img
          src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1440"
          alt="Professionals collaborating and preparing"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>

      <section style={{ padding: "4rem 0" }}>
        <div className="container-sm">
          <span className="section-tag reveal" style={{ textAlign: "center", display: "block" }}>Questions</span>
          <h2 className="section-title reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>Pricing FAQ.</h2>
          <div className="faq-list reveal">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q} <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
