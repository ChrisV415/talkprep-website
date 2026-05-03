import { useEffect } from "react";
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

const featured = {
  tag: "Career",
  readTime: "12 min read",
  date: "May 2026",
  title: "How to Resign from a Job Gracefully (With Exact Scripts)",
  desc: "The exact words to say in the first 60 seconds — and how to handle counter-offers, guilt trips, and every manager response. Includes the resignation email template.",
  href: "/how-to-resign-from-a-job",
  emoji: "🚪",
};

const posts = [
  {
    tag: "Negotiation",
    readTime: "10 min read",
    date: "Coming soon",
    title: "How to Ask for a Raise Without Feeling Awkward",
    desc: "Most people undersell themselves before the conversation even starts. Here's how to anchor your number and hold it when they push back.",
    href: "#",
    soon: true,
  },
  {
    tag: "Family",
    readTime: "8 min read",
    date: "Coming soon",
    title: "How to Set a Boundary With a Family Member",
    desc: "What to actually say to someone you love — without the guilt spiral that usually follows.",
    href: "#",
    soon: true,
  },
  {
    tag: "Management",
    readTime: "9 min read",
    date: "Coming soon",
    title: "How to Fire Someone With Dignity",
    desc: "One of the hardest conversations in management. Done with clarity and respect for both people.",
    href: "#",
    soon: true,
  },
  {
    tag: "Psychology",
    readTime: "7 min read",
    date: "Coming soon",
    title: "Why You Freeze in Hard Conversations (And What to Do About It)",
    desc: "The neuroscience behind why you go blank under pressure — and the simple rehearsal technique that actually works.",
    href: "#",
    soon: true,
  },
  {
    tag: "Relationships",
    readTime: "8 min read",
    date: "Coming soon",
    title: "How to Tell Your Partner Something Difficult",
    desc: "The conversation you've been avoiding. Said with care, not fear — and without it becoming a fight.",
    href: "#",
    soon: true,
  },
  {
    tag: "Career",
    readTime: "6 min read",
    date: "Coming soon",
    title: "How to Give Negative Feedback That Actually Lands",
    desc: "The truth, said directly. Honest without being cruel, actionable without being vague.",
    href: "#",
    soon: true,
  },
  {
    tag: "Negotiation",
    readTime: "7 min read",
    date: "Coming soon",
    title: "How to Negotiate Anything (Without Feeling Like a Jerk)",
    desc: "The negotiation principles that work whether you're talking salary, rent, or a contractor invoice.",
    href: "#",
    soon: true,
  },
  {
    tag: "Management",
    readTime: "8 min read",
    date: "Coming soon",
    title: "How to Deliver Bad News to a Client",
    desc: "Delays, missed targets, scope changes — what to say when things go wrong and the client is waiting.",
    href: "#",
    soon: true,
  },
];

const categories = ["All", "Career", "Negotiation", "Family", "Relationships", "Management", "Psychology"];

export default function Blog() {
  useReveal();

  return (
    <div className="tp-page">
      <SEO
        title="TalkPrep Blog — Scripts and Thinking for Hard Conversations"
        description="Practical guides on how to say the hard thing — word for word, with the psychology behind why it works. Resignations, raises, boundaries, feedback, and more."
        canonical="/blog"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <SiteNav />

      {/* HERO */}
      <section className="page-hero" style={{ textAlign: "left", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-tag">Blog</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.75rem", maxWidth: "640px" }}>
            Scripts and thinking for the conversations that matter.
          </h1>
          <p className="section-hint" style={{ maxWidth: "480px" }}>
            Practical guides on how to say the hard thing — word for word, with the psychology behind
            why it works. New posts every two weeks.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container">

          {/* Category pills */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "2.5rem" }} className="reveal">
            {categories.map((cat, i) => (
              <button
                key={cat}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "5px 13px",
                  borderRadius: "20px",
                  border: "1px solid var(--border2)",
                  background: i === 0 ? "var(--ink)" : "transparent",
                  color: i === 0 ? "var(--cream)" : "var(--ink3)",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="featured-guide reveal" style={{ marginBottom: "2.5rem" }}>
            <div className="fg-body">
              <span className="fg-tag">Latest post</span>
              <h2 className="fg-title">{featured.title}</h2>
              <p className="fg-meta">{featured.tag} · {featured.readTime} · {featured.date}</p>
              <p className="fg-desc">{featured.desc}</p>
              <Link href={featured.href} className="btn btn-rust">Read the article →</Link>
            </div>
            <div className="fg-visual">{featured.emoji}</div>
          </div>

          {/* Post grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="reveal">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="guide-card"
                style={post.soon ? { pointerEvents: "none", opacity: 0.65 } : {}}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span className="gc-tag" style={{ margin: 0 }}>{post.tag} · {post.readTime}</span>
                  {post.soon && (
                    <span style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "8px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink4)",
                      background: "var(--cream3)",
                      padding: "2px 7px",
                      borderRadius: "2px",
                    }}>
                      Soon
                    </span>
                  )}
                </div>
                <h3 className="gc-title">{post.title}</h3>
                <p className="gc-desc">{post.desc}</p>
                <span className="gc-read" style={post.soon ? { color: "var(--ink4)" } : {}}>
                  {post.soon ? "Notify me →" : "Read →"}
                </span>
              </a>
            ))}
          </div>

          {/* Newsletter bar */}
          <div className="nl-bar reveal" style={{ marginTop: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.35rem" }}>
              New post every two weeks.
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--ink3)", marginBottom: "1.1rem" }}>
              Practical scripts for the conversations everyone is avoiding. No noise.
            </p>
            <div className="nl-form">
              <input type="email" className="nl-input" placeholder="your@email.com" />
              <button className="btn btn-rust">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
