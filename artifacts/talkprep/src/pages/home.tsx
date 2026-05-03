import { useEffect } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TalkPrep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TalkPrep is an AI-powered conversation preparation tool that gives you word-for-word scripts, anticipates likely responses, and lets you practice with AI role-play before difficult conversations like resignations, salary negotiations, and family talks.",
      },
    },
    {
      "@type": "Question",
      name: "How does TalkPrep work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You describe your situation, who you're talking to, and what a good outcome looks like. TalkPrep generates an exact opening script, three anticipated responses with replies, a fallback plan, and a grounding thought — all tailored to your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "Is TalkPrep free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — your first 3 sessions are completely free, no credit card required. After that, plans start at $4.99 per session or $12.99/month for unlimited conversations.",
      },
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

export default function Home() {
  useReveal();

  return (
    <div className="tp-page">
      <SEO
        title="TalkPrep — Walk Into Every Hard Conversation Ready"
        description="Get word-for-word scripts, anticipate every response, and practice with AI before the real conversation. Resignations, raises, family talks — prepared in 5 minutes."
        canonical="/"
        schema={homeSchema}
      />
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge-dot" />
            Private · AI-powered · Ready in minutes
          </div>
          <h1 className="hero-title">
            Stop rehearsing alone.<br />
            Walk into every hard conversation <em>ready.</em>
          </h1>
          <p className="hero-sub">
            Get your exact opening script, anticipate every response, and walk in prepared — for
            resignations, raises, family talks, and anything keeping you up at night.
          </p>
          <div className="hero-actions">
            <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Prepare my conversation <span>→</span></a>
            <Link href="/how-it-works" className="btn btn-secondary btn-lg">See how it works</Link>
          </div>
          <div className="hero-proof">
            <span>🔒 Completely private</span>
            <span>⚡ Ready in 5 minutes</span>
            <span>✦ Word-for-word scripts</span>
            <span>🎯 No generic advice</span>
          </div>

          <div className="mockup-wrap reveal">
            <div className="mockup-shell">
              <div className="mockup-bar">
                <div className="mockup-dots">
                  <div className="mockup-dot" style={{ background: "#FF5F57" }} />
                  <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
                  <div className="mockup-dot" style={{ background: "#28C840" }} />
                </div>
                <span className="mockup-title">TalkPrep — Resignation prep guide</span>
              </div>
              <div className="mockup-tabs">
                <span className="mockup-tab on">Prep guide</span>
                <span className="mockup-tab">Practice</span>
                <span className="mockup-tab">Review</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-panel">
                  <span className="mockup-rs-label">💬 Your opening script</span>
                  <p className="mockup-rs-title">Exactly what to say first</p>
                  <div className="mockup-script">
                    "Hey, do you have a few minutes? There's something important I need to share
                    with you. I've made the decision to resign — I've accepted an opportunity I
                    couldn't turn down, and I wanted to tell you in person rather than over email."
                  </div>
                  <span className="tag tag-rust">Scroll to see more ↓</span>
                </div>
                <div className="mockup-panel">
                  <span className="mockup-rs-label">🔄 What they might say</span>
                  <p className="mockup-rs-title">3 responses, handled</p>
                  <div className="mockup-response">
                    <strong>If they offer more money</strong>
                    "I really appreciate that — but this isn't purely about compensation. It's about
                    the direction I need to go next."
                  </div>
                  <div className="mockup-response">
                    <strong>If they get emotional</strong>
                    "I hear how you feel, and I understand. That's part of what makes this hard."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-dark">
        <div className="container">
          <div className="problem-grid">
            <div className="reveal">
              <span className="section-tag" style={{ color: "var(--rust2)" }}>The problem</span>
              <h2 className="problem-title">
                You're going in <em>completely unprepared.</em>
              </h2>
              <p className="problem-body">
                You've been rehearsing this in your head for days. But mental rehearsal alone
                doesn't prepare you for the moment they push back, get emotional, or say something
                you didn't anticipate. The words you planned evaporate.
              </p>
            </div>
            <ul className="pain-list reveal reveal-d1">
              <li className="pain-item">
                <div className="pain-icon">😰</div>
                <p className="pain-text"><strong>You freeze when it matters most.</strong> The moment they respond defensively, everything you prepared disappears.</p>
              </li>
              <li className="pain-item">
                <div className="pain-icon">🔁</div>
                <p className="pain-text"><strong>You rehearse in an echo chamber.</strong> Your internal practice doesn't anticipate what they'll actually say.</p>
              </li>
              <li className="pain-item">
                <div className="pain-icon">💸</div>
                <p className="pain-text"><strong>Good coaching costs $300/hour.</strong> Most people just go in and wing it.</p>
              </li>
              <li className="pain-item">
                <div className="pain-icon">🤐</div>
                <p className="pain-text"><strong>You can't tell anyone.</strong> The most personal conversations are the ones you can't practice with a friend.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt">
        <div className="container">
          <span className="section-tag reveal">How it works</span>
          <h2 className="section-title reveal">Three steps to ready.</h2>
          <p className="section-hint reveal" style={{ marginBottom: "2.5rem" }}>
            From dreading a conversation to walking in prepared — in under five minutes.
          </p>
          <div className="card-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="cg-item cg-item-white">
              <div className="step-icon">01</div>
              <h3 className="step-title">Describe your situation</h3>
              <p className="step-body">Tell TalkPrep who you're talking to, what's going on, and what a good outcome looks like. The more specific, the more precise your prep.</p>
              <span className="step-time">2 minutes</span>
            </div>
            <div className="cg-item cg-item-white">
              <div className="step-icon">02</div>
              <h3 className="step-title">Get your exact script</h3>
              <p className="step-body">Word-for-word opening lines, 3 anticipated responses with exact replies, a fallback plan, and a grounding thought — tailored to your situation.</p>
              <span className="step-time">Instant</span>
            </div>
            <div className="cg-item cg-item-white">
              <div className="step-icon">03</div>
              <h3 className="step-title">Practice the exchange</h3>
              <p className="step-body">Role-play with AI playing the person you described — realistically. Get an annotated transcript. Score your session. Debrief after the real conversation.</p>
              <span className="step-time">Optional but powerful</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/how-it-works" className="btn btn-secondary">See the full walkthrough →</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="features-grid">
            <div>
              <span className="section-tag reveal">Features</span>
              <h2 className="section-title reveal">Built for the real conversation.</h2>
              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }} className="reveal">
                <div className="feature-row">
                  <div className="feature-icon">📝</div>
                  <div>
                    <h3 className="feature-title">Exact scripts — not generic advice</h3>
                    <p className="feature-desc">Real words for your specific situation. Not "be direct." The actual sentence to say.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="feature-icon">🎭</div>
                  <div>
                    <h3 className="feature-title">Persona-depth role-play</h3>
                    <p className="feature-desc">Set their emotional intensity, defensiveness, and communication style. The AI plays them realistically.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="feature-icon">💡</div>
                  <div>
                    <h3 className="feature-title">Live strategy nudges</h3>
                    <p className="feature-desc">During practice, coaching tips appear in real time — focused on strategy, not delivery.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="feature-icon">📊</div>
                  <div>
                    <h3 className="feature-title">Progress dashboard</h3>
                    <p className="feature-desc">Track your clarity, composure, and outcome scores. See what you're getting better at.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-d2">
              <div className="fp-shell">
                <div className="fp-bar">
                  <span className="fp-tab">Prep</span>
                  <span className="fp-tab on">Practice</span>
                  <span className="fp-tab">Review</span>
                </div>
                <div className="fp-body">
                  <div className="fp-row user">
                    <p className="cb-label" style={{ textAlign: "right" }}>You</p>
                    <div className="cb-user">I wanted to speak with you today — I've made the decision to resign. I've accepted an offer I couldn't turn down.</div>
                  </div>
                  <div className="fp-row">
                    <p className="cb-label">Your Manager</p>
                    <div className="cb-ai">This is really surprising. I had no idea you were considering this. Is this because of something that happened here?</div>
                  </div>
                  <div className="fp-row user">
                    <p className="cb-label" style={{ textAlign: "right" }}>You</p>
                    <div className="cb-user">Nothing happened here — I've genuinely valued this place. This is about where I need to go next for my own growth.</div>
                  </div>
                  <div className="nudge">
                    <span>💡</span>
                    <span><strong>Coach:</strong> Good — you didn't take the bait. Now redirect to the handover before they probe further.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="section-dark">
        <div className="container">
          <span className="section-tag reveal" style={{ color: "var(--rust2)" }}>Scenarios</span>
          <h2 className="section-title reveal" style={{ color: "var(--cream)" }}>Every conversation that matters.</h2>
          <div className="dark-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: "2rem" }}>
            <Link href="/how-to-resign-from-a-job" className="dg-item"><span className="dg-icon">🚪</span><h3 className="dg-title">Resigning from a job</h3><p className="dg-desc">Leave gracefully. Handle counter-offers. Keep the relationship.</p></Link>
            <a href="/scenarios" className="dg-item"><span className="dg-icon">💰</span><h3 className="dg-title">Asking for a raise</h3><p className="dg-desc">Know your worth. Hold your ground. Get what you deserve.</p></a>
            <a href="/scenarios" className="dg-item"><span className="dg-icon">👨‍👩‍👧</span><h3 className="dg-title">Family conversations</h3><p className="dg-desc">Boundaries, hard truths, and things left unsaid too long.</p></a>
            <a href="/scenarios" className="dg-item"><span className="dg-icon">❤️</span><h3 className="dg-title">Relationship talks</h3><p className="dg-desc">The conversations that could change everything — said with care.</p></a>
            <a href="/scenarios" className="dg-item"><span className="dg-icon">💬</span><h3 className="dg-title">Giving hard feedback</h3><p className="dg-desc">Tell someone the truth in a way they can actually hear.</p></a>
            <Link href="/scenarios" className="dg-item"><span className="dg-icon">→</span><h3 className="dg-title">See all 11 scenarios</h3><p className="dg-desc">Firings, client bad news, landlords, setting boundaries, and more.</p></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <span className="section-tag reveal">What people say</span>
          <h2 className="section-title reveal">Used before the hardest conversation of their year.</h2>
          <div className="card-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: "2rem" }}>
            <div className="tcard cg-item-white">
              <div className="tcard-stars">★★★★★</div>
              <p className="tcard-quote">"I used TalkPrep the night before my resignation. My manager tried three different counter-offers and I handled every one. I walked out with the relationship intact."</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="tcard-av" style={{ background: "var(--rust-light)", color: "var(--rust)" }}>SK</div>
                <div><p className="tcard-name">Sarah K.</p><p className="tcard-role">Software engineer · Resigned after 5 years</p></div>
              </div>
            </div>
            <div className="tcard cg-item-white">
              <div className="tcard-stars">★★★★★</div>
              <p className="tcard-quote">"My mother and I hadn't had an honest conversation in years. TalkPrep gave me words I actually believed in. She cried. Then we talked for three hours."</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="tcard-av" style={{ background: "var(--sage-light)", color: "var(--sage)" }}>MR</div>
                <div><p className="tcard-name">Marcus R.</p><p className="tcard-role">Used for a family conversation</p></div>
              </div>
            </div>
            <div className="tcard cg-item-white">
              <div className="tcard-stars">★★★★★</div>
              <p className="tcard-quote">"I'd tried to ask for a raise twice before and always caved. I used role-play mode until I stopped flinching when they pushed back. Got $22k more."</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="tcard-av" style={{ background: "#e8eeff", color: "#185FA5" }}>JL</div>
                <div><p className="tcard-name">Jordan L.</p><p className="tcard-role">Marketing director · Salary negotiation</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section">
        <div className="container">
          <span className="section-tag reveal" style={{ textAlign: "center", display: "block" }}>Pricing</span>
          <h2 className="section-title reveal" style={{ textAlign: "center" }}>Less than one hour of coaching.</h2>
          <p className="section-hint reveal" style={{ textAlign: "center", margin: "0 auto 2rem", maxWidth: "420px" }}>
            Three options. Start free — no credit card. Less than a single therapy session.
          </p>
          <div className="card-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", maxWidth: "780px", margin: "0 auto" }}>
            <div className="pp-card cg-item-white">
              <span className="pp-plan">Single session</span>
              <div className="pp-price">$4.99</div>
              <span className="pp-per">one conversation</span>
              <ul className="pp-features">
                <li><span className="pp-check">✓</span> Full prep guide</li>
                <li><span className="pp-check">✓</span> Role-play practice</li>
                <li><span className="pp-check">✓</span> Debrief included</li>
              </ul>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}>Get started</a>
            </div>
            <div className="pp-card cg-item-ink">
              <span className="pp-plan">Monthly</span>
              <div className="pp-price">$12.99</div>
              <span className="pp-per">per month</span>
              <ul className="pp-features">
                <li><span className="pp-check">✓</span> Unlimited conversations</li>
                <li><span className="pp-check">✓</span> Progress dashboard</li>
                <li><span className="pp-check">✓</span> Annotated transcripts</li>
                <li><span className="pp-check">✓</span> Cancel anytime</li>
              </ul>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust btn-sm" style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}>Start free trial →</a>
            </div>
            <div className="pp-card cg-item-white">
              <span className="pp-plan">Annual</span>
              <div className="pp-price">$79</div>
              <span className="pp-per">per year · $6.58/mo</span>
              <ul className="pp-features">
                <li><span className="pp-check">✓</span> Everything in Monthly</li>
                <li><span className="pp-check">✓</span> Save 49%</li>
                <li><span className="pp-check">✓</span> Export history</li>
              </ul>
              <Link href="/pricing" className="btn btn-secondary btn-sm" style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}>See full pricing</Link>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "1rem", fontFamily: "'DM Mono',monospace", fontSize: "9px", color: "var(--ink4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            First 3 sessions free · No credit card required
          </p>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section section-alt">
        <div className="container">
          <span className="section-tag reveal">Conversation guides</span>
          <h2 className="section-title reveal">Scripts for the conversations everyone is Googling.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2rem" }} className="reveal">
            <Link href="/how-to-resign-from-a-job" className="guide-card">
              <span className="gc-tag">Career · 12 min read</span>
              <h3 className="gc-title">How to Resign from a Job Gracefully (With Exact Scripts)</h3>
              <p className="gc-desc">The exact words — including how to handle counter-offers, guilt trips, and every manager response.</p>
              <span className="gc-read">Read guide →</span>
            </Link>
            <Link href="/guides" className="guide-card">
              <span className="gc-tag">Career · Coming soon</span>
              <h3 className="gc-title">How to Ask for a Raise (Word-for-Word Scripts)</h3>
              <p className="gc-desc">Anchor your number, handle "not right now," and know when to hold firm.</p>
              <span className="gc-read" style={{ color: "var(--ink4)" }}>Notify me →</span>
            </Link>
            <Link href="/guides" className="guide-card">
              <span className="gc-tag">Personal · Coming soon</span>
              <h3 className="gc-title">How to Set a Boundary With a Family Member</h3>
              <p className="gc-desc">What to actually say to someone you love — without the guilt spiral.</p>
              <span className="gc-read" style={{ color: "var(--ink4)" }}>Notify me →</span>
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/guides" className="btn btn-secondary">See all guides →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container fca">
          <span className="fca-eyebrow">You already know what you need to say.</span>
          <h2 className="fca-title">Stop rehearsing alone.<br /><em>Walk in ready.</em></h2>
          <p className="fca-sub">The conversation isn't going to get easier by waiting. Prepare in five minutes.</p>
          <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust btn-lg">Prepare my conversation →</a>
          <p className="fca-note">First 3 sessions free · No credit card required</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
