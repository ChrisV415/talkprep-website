import { useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { Lock, Target, Heart } from "@phosphor-icons/react";

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

export default function About() {
  useReveal();

  return (
    <div className="tp-page">
      <SEO
        title="About TalkPrep — Built for the Conversation You Keep Putting Off"
        description="TalkPrep is a private, AI-powered preparation tool for difficult conversations. We built it because the most important conversations in people's lives are the ones they're least prepared for."
        canonical="/about"
        keywords="about TalkPrep, AI conversation preparation, conversation coaching app, difficult conversation tool"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />
      <SiteNav />

      <section className="about-page-hero">
        <div className="container-md">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-tag">About TalkPrep</span>
              <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", maxWidth: "680px", marginBottom: "1rem" }}>
                Built for the conversation you keep putting off.
              </h1>
              <div className="mission-pull">
                <p>"The most important conversations in people's lives are also the ones they're least prepared for. We built TalkPrep to change that."</p>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--ink2)", lineHeight: 1.8, maxWidth: "560px" }}>
                Every day, people go into difficult conversations — resignations, raises, family confrontations,
                relationship talks — completely unprepared. Not because they don't care, but because real
                preparation requires a thinking partner, and most people don't have one available at 11pm
                the night before a hard conversation.
              </p>
            </div>
            <div style={{ height: "460px", overflow: "hidden", borderRadius: "3px", border: "1px solid var(--border)", flexShrink: 0 }}>
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="People having meaningful conversations"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="container-md">
          <div className="story-grid reveal">
            <div className="story-body">
              <h3>Why we built this</h3>
              <p>Most AI conversation tools are aimed at enterprise sales teams — helping reps practice pitches. That's useful. But it leaves an enormous gap: the hundreds of millions of people who have a personal or professional conversation they're dreading and no structured way to prepare for it.</p>
              <p>Therapists help people navigate difficult relationships, but most people can't afford $200/hour sessions. Coaches help executives communicate, but they're inaccessible to most. Friends give advice, but often can't be fully objective — and sometimes the conversation is too personal to share.</p>
              <p>TalkPrep was built to fill that gap. Not as a therapy replacement or a corporate training tool — as a private, judgment-free space to figure out exactly what you want to say and how to say it, before the moment arrives.</p>

              <h3>What makes us different</h3>
              <p>Every other tool in this space is built for enterprise sales training or generic speech coaching. Yoodli counts your filler words. LinkedIn Learning gives corporate roleplay scenarios. None of them help you figure out what to say to your mother, your landlord, or the manager you're about to resign from.</p>
              <p>TalkPrep is built entirely around the personal moment. The AI plays the actual person you're talking to, not a generic buyer persona. The coaching is about whether you're moving toward your outcome — not how many times you said "um."</p>

              <h3>Privacy is the foundation</h3>
              <p>The most personal conversations are the ones people can't discuss with anyone. TalkPrep is built from the ground up to keep your conversations private. We don't sell data, we don't use your sessions for advertising, and we don't train our AI on your content without your consent.</p>
            </div>
            <div>
              <div className="stats-sidebar">
                <span className="ss-head">By the numbers</span>
                <div className="ss-item">
                  <span className="ss-num">11</span>
                  <span className="ss-lbl">Conversation scenarios supported</span>
                </div>
                <div className="ss-item">
                  <span className="ss-num">5</span>
                  <span className="ss-lbl">Revenue streams planned by year 3</span>
                </div>
                <div className="ss-item">
                  <span className="ss-num">$0</span>
                  <span className="ss-lbl">Raised — bootstrapped from day one</span>
                </div>
                <div className="ss-item">
                  <span className="ss-num">3</span>
                  <span className="ss-lbl">Free sessions, no card required</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-grid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: "3rem" }}>
            <div className="cg-item cg-item-white">
              <span style={{ display: "flex", marginBottom: "0.75rem" }}><Lock weight="duotone" size={34} color="var(--rust)" /></span>
              <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>Private by default</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--ink3)", lineHeight: 1.65 }}>Your conversations never leave your control. No ads, no data selling, no judgment.</p>
            </div>
            <div className="cg-item cg-item-white">
              <span style={{ display: "flex", marginBottom: "0.75rem" }}><Target weight="duotone" size={34} color="var(--rust)" /></span>
              <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>Specific, not generic</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--ink3)", lineHeight: 1.65 }}>Real scripts for your exact situation — not advice that could apply to anyone.</p>
            </div>
            <div className="cg-item cg-item-white">
              <span style={{ display: "flex", marginBottom: "0.75rem" }}><Heart weight="duotone" size={34} color="var(--rust)" /></span>
              <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>Human outcomes first</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--ink3)", lineHeight: 1.65 }}>We measure success by whether conversations actually go better — not engagement metrics.</p>
            </div>
          </div>

          <div className="contact-strip reveal">
            <div>
              <h3 className="cs-title">Want to talk to us?</h3>
              <p className="cs-desc">For HR partnerships, press inquiries, or general questions — we read everything.</p>
            </div>
            <a href="mailto:talkprep.info@gmail.com" className="btn btn-secondary">talkprep.info@gmail.com</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
