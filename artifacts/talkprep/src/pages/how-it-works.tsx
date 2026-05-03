import { useEffect, useState } from "react";
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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".tp-page .reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const faqs = [
  {
    q: "Is this like therapy?",
    a: "No — TalkPrep is a preparation tool, not a therapeutic one. The goal is to help you walk into one specific conversation feeling ready. If you're working through deeper emotional patterns, therapy is the right tool. TalkPrep is for when you know what you need to say but need help figuring out how to say it.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "ChatGPT is a general-purpose tool. TalkPrep structures your prep into four specific sections, saves your sessions, includes persona-depth role-play, generates annotated transcripts, tracks your scores, and closes the loop with a debrief. It's the difference between asking a general question and using a tool designed specifically for this job.",
  },
  {
    q: "What if I just need a quick script?",
    a: "That's completely fine. Fill in the prep form, get your guide, and use it. The role-play, transcript, scoring, and debrief are all optional — they're there when you want to go deeper.",
  },
  {
    q: "How private is it really?",
    a: "Completely. Your conversations aren't shared with anyone, aren't used for advertising, and aren't used to train AI models without explicit consent. Your session history is stored locally in your browser.",
  },
];

export default function HowItWorks() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="tp-page">
      <SEO
        title="How TalkPrep Works — From Dreading a Conversation to Walking in Ready"
        description="Five steps: describe your situation, get your exact script, practice with AI role-play, review your annotated transcript, and debrief after the real conversation."
        canonical="/how-it-works"
        breadcrumbs={[{ name: "How It Works", path: "/how-it-works" }]}
      />
      <SiteNav />

      <section className="page-hero">
        <div className="container">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>How it works</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", textAlign: "center", marginBottom: "0.75rem" }}>
            From dreading a conversation to walking in ready.
          </h1>
          <p className="section-hint" style={{ textAlign: "center", maxWidth: "460px", margin: "0 auto" }}>
            Five steps. Under five minutes for the first three. The last two happen after the real
            conversation and make the next one even better.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 0 4rem" }}>
        <div className="container-md">
          {[
            {
              num: "Step 01",
              time: "2 minutes",
              title: "Describe your situation",
              body: [
                "Choose your scenario from 11 options. Then tell TalkPrep who you're talking to and what's going on. The more specific you are, the more precise your prep will be.",
                '"My manager of 3 years — supportive but gets defensive when surprised" produces a much better script than "my boss." Every detail matters.',
              ],
              list: {
                label: "What you provide",
                items: [
                  "The type of conversation (from 11 scenarios)",
                  "Who you're talking to — relationship, personality, context",
                  "What the situation is — the more specific the better",
                  "What a good outcome looks like for you",
                  "The tone you want to strike (6 options)",
                ],
              },
            },
            {
              num: "Step 02",
              time: "Instant",
              title: "Get your exact script",
              body: [
                "TalkPrep generates four things immediately: your opening script (the exact words to say to start), three specific responses they're likely to give and exactly what to say to each, a fallback plan if it goes sideways, and a grounding thought to hold onto mentally.",
                'These are real scripts, not generic advice. Not "be direct and confident." The actual sentence you would say in your specific situation to this specific person.',
              ],
              list: {
                label: "What you get",
                items: [
                  "Word-for-word opening script tailored to your situation",
                  "3 likely responses with exact reply scripts for each",
                  "A fallback plan if they get emotional or defensive",
                  "One grounding thought to hold onto when pressure builds",
                ],
              },
            },
            {
              num: "Step 03",
              time: "5–15 minutes",
              title: "Practice the conversation",
              body: [
                "Configure the person you're talking to using four personality sliders and reaction style selection. TalkPrep then plays them — realistically, not artificially easy.",
                'During the practice session, strategic coaching nudges appear in real time — "you caved on that, hold your ground" or "they\'re softening, push toward the outcome." In Curveballs mode, the AI throws two unexpected things you didn\'t prep for.',
              ],
              list: {
                label: "Practice features",
                items: [
                  "Persona sliders: emotional intensity, defensiveness, communication, power",
                  "Reaction style: goes quiet, deflects, gets analytical, pushes back, etc.",
                  "Difficulty modes: Realistic, Challenging, or Curveballs",
                  "Live strategy nudges every 2 exchanges",
                ],
              },
            },
            {
              num: "Step 04",
              time: "After practice",
              title: "Review your annotated transcript",
              body: [
                "After ending the session, TalkPrep analyzes every message you sent. Green means handled well. Amber means there was a missed opportunity — with a specific suggestion for what to say differently.",
                "Then score yourself on three dimensions: Clarity, Composure, and Outcome. These feed your progress dashboard over time.",
              ],
              list: {
                label: "What you review",
                items: [
                  "Full transcript with AI annotations on every message you sent",
                  "Green (handled well) vs amber (missed opportunity) with specific suggestions",
                  "Self-reported scores: Clarity, Composure, Outcome (1–5 each)",
                ],
              },
            },
            {
              num: "Step 05",
              time: "After the real conversation",
              title: "Debrief and build for next time",
              body: [
                "Come back after the real conversation and tell TalkPrep what happened. How did it go? What did they actually say? What would you do differently?",
                "TalkPrep reflects back a warm, specific debrief. Over time, your dashboard shows how your scores are trending, what scenarios you prep most, and where you're getting stronger.",
              ],
              list: {
                label: "Your dashboard tracks",
                items: [
                  "Every session — scenario, who, date, scores",
                  "Progress trend chart across your last 6 sessions",
                  "Average clarity, composure, and outcome scores",
                  "Scenario distribution — what you prep for most",
                ],
              },
            },
          ].map((step, i) => (
            <div className="step-block reveal" key={i}>
              <div className="step-num">{step.num}</div>
              <div>
                <span className="step-tag-time">{step.time}</span>
                <h2>{step.title}</h2>
                {step.body.map((p, j) => <p key={j}>{p}</p>)}
                <div className="feature-list-box">
                  <span className="flb-title">{step.list.label}</span>
                  <ul className="flb-list">
                    {step.list.items.map((item, k) => <li key={k}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "3rem 0 4rem", background: "var(--cream2)" }}>
        <div className="container-sm">
          <span className="section-tag reveal" style={{ textAlign: "center", display: "block" }}>Common questions</span>
          <h2 className="section-title reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>How it actually works.</h2>
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
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="#" className="btn btn-primary btn-lg">Try it free →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
