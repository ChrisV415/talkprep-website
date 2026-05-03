import { useEffect, useState } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

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

const liveGuides = [
  {
    href: "/how-to-resign-from-a-job",
    title: "How to Resign from a Job (With Exact Scripts)",
    desc: "Opening script, counter-offer handling, the resignation email, and what to do the day after.",
    tag: "Career",
  },
  {
    href: "/how-to-confront-a-friend",
    title: "How to Confront a Friend (Without Losing the Friendship)",
    desc: "Most friendships don't end in fights — they fade because no one was willing to say the thing.",
    tag: "Friendship",
  },
  {
    href: "/how-to-set-a-boundary-with-family",
    title: "How to Set a Boundary With a Family Member",
    desc: "What to actually say to someone you love — without the guilt spiral that usually follows.",
    tag: "Family",
  },
  {
    href: "/how-to-fire-someone",
    title: "How to Fire Someone With Dignity",
    desc: "The conversation nobody wants to have — done with clarity, legality, and humanity.",
    tag: "Management",
  },
  {
    href: "/how-to-give-difficult-feedback",
    title: "How to Give Difficult Feedback That Actually Lands",
    desc: "The truth, said directly — honest without being cruel, actionable without being vague.",
    tag: "Management",
  },
  {
    href: "/how-to-have-a-performance-review-conversation",
    title: "How to Have a Performance Review Conversation",
    desc: "Make reviews honest, motivating, and actually useful to the person sitting across from you.",
    tag: "Management",
  },
  {
    href: "/how-to-tell-partner-something-difficult",
    title: "How to Tell Your Partner Something Difficult",
    desc: "The conversation you've been avoiding. Said with care, not fear — and without it becoming a fight.",
    tag: "Relationships",
  },
  {
    href: "/how-to-deliver-bad-news-to-a-client",
    title: "How to Deliver Bad News to a Client (Without Losing the Relationship)",
    desc: "Delays, missed targets, mistakes — things go wrong. What matters is how you deliver the news.",
    tag: "Management",
  },
  {
    href: "/how-to-give-negative-feedback-that-actually-lands",
    title: "How to Give Negative Feedback That Actually Lands",
    desc: "The four-part structure that sits between meaningless softness and defensiveness-triggering bluntness.",
    tag: "Career",
  },
  {
    href: "/how-to-negotiate-anything",
    title: "How to Negotiate Anything (Without Feeling Like a Jerk)",
    desc: "Scripts for salary, rent, contractor quotes, and any negotiation where you want better terms.",
    tag: "Negotiation",
  },
  {
    href: "/why-you-freeze-in-hard-conversations",
    title: "Why You Freeze in Hard Conversations (And What to Do)",
    desc: "The neuroscience behind going blank under pressure — and the rehearsal technique that actually works.",
    tag: "Psychology",
  },
];

const upcomingGuides = [
  {
    title: "How to Ask for a Raise (Word-for-Word Scripts)",
    desc: 'Anchor your number, handle "not right now," and know when to walk away.',
  },
];

const guidesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TalkPrep Guides — Scripts for Hard Conversations",
  description: "Free guides with exact scripts for the hardest conversations — how to resign, fire someone, set a boundary, give feedback, and more.",
  url: "https://talkprep.co/guides",
  itemListElement: liveGuides.map((guide, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: guide.title,
    url: `https://talkprep.co${guide.href}`,
  })),
};

export default function Guides() {
  useReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="tp-page">
      <SEO
        title="Conversation Scripts & Guides — How to Say the Hard Thing"
        description="Free guides with word-for-word scripts for the hardest conversations: how to resign, ask for a raise, set a boundary, fire someone, and more. New guide every two weeks."
        canonical="/guides"
        keywords="conversation scripts, how to resign, how to fire someone, how to give feedback, difficult conversation guides, word-for-word scripts"
        schema={guidesSchema}
        breadcrumbs={[{ name: "Guides", path: "/guides" }]}
      />
      <SiteNav />

      <section className="page-hero" style={{ textAlign: "left" }}>
        <div className="container">
          <span className="section-tag">Guides</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.75rem" }}>
            Scripts for the conversations everyone is Googling.
          </h1>
          <p className="section-hint" style={{ maxWidth: "500px" }}>
            Free guides with exact scripts for the hardest conversations. Each one has TalkPrep
            embedded so you can get a personalized version for your specific situation.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 0 4rem" }}>
        <div className="container">
          {/* Featured guide */}
          <div className="featured-guide reveal">
            <div className="fg-body">
              <span className="fg-tag">Latest guide</span>
              <h2 className="fg-title">
                How to Resign from a Job Gracefully <em>(With Exact Scripts)</em>
              </h2>
              <p className="fg-meta">Career · 12 min read · May 2026</p>
              <p className="fg-desc">
                The exact words to say in the first 60 seconds — and how to handle counter-offers,
                guilt trips, and every manager response. Includes the resignation email template.
              </p>
              <Link href="/how-to-resign-from-a-job" className="btn btn-rust">Read the guide →</Link>
            </div>
            <div className="fg-visual" style={{ overflow: "hidden", padding: 0 }}>
              <img
                className="fg-img"
                src="https://images.pexels.com/photos/7581040/pexels-photo-7581040.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="How to resign from a job"
                loading="lazy"
              />
            </div>
          </div>

          {/* Guide grid — live */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginBottom: "1.5rem" }} className="reveal">
            {liveGuides.map((g) => (
              <Link key={g.href} href={g.href} className="guide-card">
                <span className="gc-status">{g.tag} · Available now</span>
                <h3 className="gc-title">{g.title}</h3>
                <p className="gc-desc">{g.desc}</p>
                <span className="gc-link">Read →</span>
              </Link>
            ))}
            {upcomingGuides.map((g, i) => (
              <a key={i} href="#" className="guide-card disabled">
                <span className="gc-status soon">Coming soon</span>
                <h3 className="gc-title">{g.title}</h3>
                <p className="gc-desc">{g.desc}</p>
                <span className="gc-link" style={{ color: "var(--ink4)" }}>Notify me →</span>
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="nl-bar reveal">
            <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.35rem" }}>
              New guide every two weeks.
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--ink3)", marginBottom: "1.1rem" }}>
              Get notified when the next guide publishes — no spam.
            </p>
            {submitted ? (
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "11px", color: "var(--rust)", letterSpacing: "0.06em" }}>
                ✓ You're on the list.
              </p>
            ) : (
              <div className="nl-form">
                <input
                  type="email"
                  className="nl-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn btn-rust"
                  onClick={() => { if (email) setSubmitted(true); }}
                >
                  Notify me
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
