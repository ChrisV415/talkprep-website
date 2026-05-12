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

const featured = {
  tag: "Career",
  readTime: "12 min read",
  date: "May 2026",
  title: "How to Resign from a Job Gracefully (With Exact Scripts)",
  desc: "The exact words to say in the first 60 seconds — and how to handle counter-offers, guilt trips, and every manager response. Includes the resignation email template.",
  href: "/how-to-resign-from-a-job",
  img: "https://images.pexels.com/photos/7581040/pexels-photo-7581040.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const posts = [
  {
    tag: "Friendship",
    readTime: "11 min read",
    date: "May 2026",
    title: "How to Confront a Friend (Without Losing the Friendship)",
    desc: "Most friendships don't end in fights — they fade because no one was willing to say the thing. Here is how to say it with care and honesty.",
    href: "/how-to-confront-a-friend",
    img: "https://plus.unsplash.com/premium_photo-1726718514261-7b67197b4b47?fm=jpg&q=60&w=600&ixlib=rb-4.1.0",
    soon: false,
  },
  {
    tag: "Family",
    readTime: "9 min read",
    date: "May 2026",
    title: "How to Set a Boundary With a Family Member",
    desc: "What to actually say to someone you love — without the guilt spiral that usually follows. Exact scripts for parents, siblings, and extended family.",
    href: "/how-to-set-a-boundary-with-family",
    img: "https://images.pexels.com/photos/8489322/pexels-photo-8489322.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Management",
    readTime: "12 min read",
    date: "May 2026",
    title: "How to Fire Someone With Dignity",
    desc: "One of the hardest conversations in management. Done with clarity and respect for both people in the room.",
    href: "/how-to-fire-someone",
    img: "https://images.pexels.com/photos/6632536/pexels-photo-6632536.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Relationships",
    readTime: "8 min read",
    date: "May 2026",
    title: "How to Tell Your Partner Something Difficult",
    desc: "The conversation you've been avoiding. Said with care, not fear — and without it becoming a fight.",
    href: "/how-to-tell-partner-something-difficult",
    img: "https://images.pexels.com/photos/5616236/pexels-photo-5616236.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Management",
    readTime: "9 min read",
    date: "May 2026",
    title: "How to Give Difficult Feedback That Actually Lands",
    desc: "The truth, said directly. Honest without being cruel, actionable without being vague.",
    href: "/how-to-give-difficult-feedback",
    img: "https://images.pexels.com/photos/8866744/pexels-photo-8866744.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Management",
    readTime: "10 min read",
    date: "May 2026",
    title: "How to Have a Performance Review Conversation",
    desc: "Most performance reviews are either painfully vague or so rehearsed they mean nothing. Here's how to have one that's actually useful.",
    href: "/how-to-have-a-performance-review-conversation",
    img: "https://images.pexels.com/photos/7651557/pexels-photo-7651557.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Management",
    readTime: "8 min read",
    date: "May 2026",
    title: "How to Deliver Bad News to a Client (Without Losing the Relationship)",
    desc: "Delays, missed targets, scope changes — things go wrong. What determines whether the relationship survives is almost never the bad news itself.",
    href: "/how-to-deliver-bad-news-to-a-client",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Career",
    readTime: "8 min read",
    date: "May 2026",
    title: "How to Give Negative Feedback That Actually Lands",
    desc: "The structure that works sits between softening to meaninglessness and landing so hard it creates defensiveness. More specific than most people realise.",
    href: "/how-to-give-negative-feedback-that-actually-lands",
    img: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Negotiation",
    readTime: "9 min read",
    date: "May 2026",
    title: "How to Negotiate Anything (Without Feeling Like a Jerk)",
    desc: "The negotiation principles that work whether you're talking salary, rent, or a contractor invoice. Collaborative, not adversarial.",
    href: "/how-to-negotiate-anything",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Psychology",
    readTime: "7 min read",
    date: "May 2026",
    title: "Why You Freeze in Hard Conversations (And What to Do About It)",
    desc: "The neuroscience behind why you go blank under pressure — and the simple rehearsal technique that actually works.",
    href: "/why-you-freeze-in-hard-conversations",
    img: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
  {
    tag: "Negotiation",
    readTime: "10 min read",
    date: "May 2026",
    title: "How to Ask for a Raise Without Feeling Awkward",
    desc: "Most people undersell themselves before the conversation even starts. Here's how to anchor your number and hold it when they push back.",
    href: "/how-to-ask-for-a-raise-without-feeling-awkward",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    soon: false,
  },
];

const categories = ["All", "Career", "Management", "Family", "Relationships", "Friendship", "Negotiation", "Psychology"];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "TalkPrep Blog",
  description: "Scripts and thinking for the conversations that matter — word for word, with the psychology behind why it works.",
  url: "https://talk-prep.cloud/blog",
  publisher: {
    "@type": "Organization",
    name: "TalkPrep",
    url: "https://talk-prep.cloud",
    logo: { "@type": "ImageObject", url: "https://talk-prep.cloud/favicon.svg" },
  },
};

async function subscribeEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) return { success: true };
    return { success: false, error: data.error ?? "Something went wrong" };
  } catch {
    return { success: false, error: "Network error — please try again" };
  }
}

export default function Blog() {
  useReveal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe() {
    if (!email) return;
    setStatus("loading");
    const result = await subscribeEmail(email);
    if (result.success) {
      setStatus("done");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong");
    }
  }

  return (
    <div className="tp-page">
      <SEO
        title="TalkPrep Blog — Scripts and Thinking for Hard Conversations"
        description="Practical guides on how to say the hard thing — word for word, with the psychology behind why it works. Resignations, raises, boundaries, feedback, and more."
        canonical="/blog"
        keywords="conversation scripts, hard conversation guides, workplace communication, resignation scripts, salary negotiation guide, difficult conversations"
        schema={blogSchema}
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
            <div className="fg-visual" style={{ overflow: "hidden", padding: 0 }}>
              <img
                className="fg-img"
                src={featured.img}
                alt={featured.title}
                loading="lazy"
              />
            </div>
          </div>

          {/* Post grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="card-grid reveal">
            {posts.map((post, i) => (
              post.soon ? (
                <div
                  key={i}
                  className="guide-card"
                  style={{ pointerEvents: "none", opacity: 0.65 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span className="gc-tag" style={{ margin: 0 }}>{post.tag} · {post.readTime}</span>
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
                  </div>
                  <h3 className="gc-title">{post.title}</h3>
                  <p className="gc-desc">{post.desc}</p>
                  <span className="gc-read" style={{ color: "var(--ink4)" }}>Notify me →</span>
                </div>
              ) : (
                <Link
                  key={i}
                  href={post.href}
                  className="guide-card"
                  style={{ padding: 0, overflow: "hidden" }}
                >
                  {post.img && (
                    <img
                      className="gc-img"
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      style={{ borderRadius: "2px 2px 0 0", margin: 0 }}
                    />
                  )}
                  <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                    <span className="gc-tag" style={{ marginBottom: "0.5rem" }}>{post.tag} · {post.readTime}</span>
                    <h3 className="gc-title">{post.title}</h3>
                    <p className="gc-desc">{post.desc}</p>
                    <span className="gc-read">Read →</span>
                  </div>
                </Link>
              )
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
            {status === "done" ? (
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "11px", color: "var(--rust)", letterSpacing: "0.06em" }}>✓ You're on the list.</p>
            ) : (
              <>
                <div className="nl-form">
                  <input
                    type="email"
                    className="nl-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    disabled={status === "loading"}
                  />
                  <button className="btn btn-rust" onClick={handleSubscribe} disabled={status === "loading"}>
                    {status === "loading" ? "..." : "Subscribe"}
                  </button>
                </div>
                {status === "error" && (
                  <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "11px", color: "var(--rust)", letterSpacing: "0.06em", marginTop: "0.5rem" }}>{errorMsg}</p>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
