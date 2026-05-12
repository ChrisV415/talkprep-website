import { useEffect } from "react";
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

const scenarios = [
  {
    icon: <Door weight="duotone" size={32} color="var(--rust)" />,
    title: "Resigning from a job",
    desc: "Leave with your relationships and reputation intact. Handle counter-offers, guilt trips, and awkward questions without caving.",
    note: "Opening script · Counter-offer handling · Resignation email",
    href: "/how-to-resign-from-a-job",
    internal: true,
  },
  {
    icon: <CurrencyDollar weight="duotone" size={32} color="var(--rust)" />,
    title: "Asking for a raise",
    desc: 'Know exactly what to say, how to anchor your number, and what to do when they say \u201cnot right now.\u201d',
    note: "Opening framing · Pushback responses · Walk-away threshold",
    href: "#",
  },
  {
    icon: <ChatCircle weight="duotone" size={32} color="var(--rust)" />,
    title: "Giving difficult feedback",
    desc: "Tell someone the truth in a way they can actually hear — without destroying the relationship.",
    note: "Specific vs vague · Defensive responses · Follow-up",
    href: "#",
  },
  {
    icon: <UsersThree weight="duotone" size={32} color="var(--rust)" />,
    title: "Family conversations",
    desc: "Setting boundaries, sharing hard news, or finally saying something unsaid for too long.",
    note: "Boundary language · Guilt deflection · Keeping the relationship",
    href: "#",
  },
  {
    icon: <Heart weight="duotone" size={32} color="var(--rust)" />,
    title: "Relationship talks",
    desc: "The conversations that could change everything — said with care and clarity instead of fear.",
    note: "Opening vulnerability · Defensiveness · What you actually need",
    href: "#",
  },
  {
    icon: <ClipboardText weight="duotone" size={32} color="var(--rust)" />,
    title: "Firing or letting someone go",
    desc: "One of the hardest conversations in management — done with clarity and dignity for both people.",
    note: "Legal language · Emotional reactions · Next steps",
    href: "#",
  },
  {
    icon: <Handshake weight="duotone" size={32} color="var(--rust)" />,
    title: "Confronting a friend",
    desc: "When someone you care about has crossed a line and you need to say something without blowing up the friendship.",
    note: 'Non-accusatory framing · "I" language · What needs to change',
    href: "#",
  },
  {
    icon: <Prohibit weight="duotone" size={32} color="var(--rust)" />,
    title: "Setting a boundary",
    desc: "Saying no, or not this way, clearly and without excessive apology — with someone who doesn't always respect limits.",
    note: "Clear statement · Pushback · Enforcement language",
    href: "#",
  },
  {
    icon: <Megaphone weight="duotone" size={32} color="var(--rust)" />,
    title: "Bad news to a client",
    desc: "Delivering project delays or failed deliverables in a way that keeps the relationship and your credibility intact.",
    note: "Ownership · Solution framing · Anger handling",
    href: "#",
  },
  {
    icon: <House weight="duotone" size={32} color="var(--rust)" />,
    title: "Landlord or housing disputes",
    desc: "Asking for repairs, disputing charges, or addressing lease problems — with the person who has power over your home.",
    note: "Power dynamic · Documentation language · Escalation",
    href: "#",
  },
  {
    icon: <PlusCircle weight="duotone" size={32} color="var(--rust)" />,
    title: "Something else entirely",
    desc: "Any difficult conversation not covered above. TalkPrep adapts to whatever you describe — no template it can't work from.",
    note: "Fully custom · Your situation · Your person",
    href: "#",
  },
];

const scenariosSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TalkPrep Conversation Scenarios",
  description: "TalkPrep covers 11 conversation types — resignations, raises, feedback, family boundaries, relationship talks, and more.",
  url: "https://talk-prep.cloud/scenarios",
  itemListElement: scenarios
    .filter((sc) => sc.href && sc.href !== "#")
    .map((sc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: sc.title,
      url: `https://talk-prep.cloud${sc.href}`,
    })),
};

export default function Scenarios() {
  useReveal();

  return (
    <div className="tp-page">
      <SEO
        title="Hard Conversation Scenarios — Resignation, Raise, Family & More"
        description="TalkPrep covers 11 conversation types: resigning, asking for a raise, giving feedback, family boundaries, relationship talks, firing someone, and more. Get your exact script."
        canonical="/scenarios"
        keywords="difficult conversation scenarios, resignation conversation, asking for raise script, family boundary conversation, relationship communication scripts"
        schema={scenariosSchema}
        breadcrumbs={[{ name: "Scenarios", path: "/scenarios" }]}
      />
      <SiteNav />

      <section className="page-hero">
        <div className="container">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>Scenarios</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", textAlign: "center", marginBottom: "0.75rem" }}>
            Every conversation that matters.
          </h1>
          <p className="section-hint" style={{ textAlign: "center", maxWidth: "460px", margin: "0 auto" }}>
            TalkPrep covers 11 conversation types. If yours isn't listed, use "Something else" — it
            works for any difficult conversation.
          </p>
        </div>
      </section>

      <div style={{ width: "100%", height: "360px", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1440"
          alt="People in various professional and personal conversation settings"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>

      <section style={{ padding: "3rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="card-grid reveal">
            {scenarios.map((sc, i) =>
              sc.internal ? (
                <Link key={i} href={sc.href} className="sc-full">
                  <span className="sc-full-icon">{sc.icon}</span>
                  <h3 className="sc-full-title">{sc.title}</h3>
                  <p className="sc-full-desc">{sc.desc}</p>
                  <span className="sc-full-note">{sc.note}</span>
                </Link>
              ) : (
                <a key={i} href={sc.href} className="sc-full">
                  <span className="sc-full-icon">{sc.icon}</span>
                  <h3 className="sc-full-title">{sc.title}</h3>
                  <p className="sc-full-desc">{sc.desc}</p>
                  <span className="sc-full-note">{sc.note}</span>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      <div className="tp-page" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ padding: "3rem var(--col)" }}>
          <div className="free-trial-banner">
            <div className="ftb-inner">
              <span className="ftb-emoji">🎁</span>
              <div>
                <p className="ftb-title">Your first prep session is completely free</p>
                <p className="ftb-sub">Sign up, describe your situation, and get your exact script — no credit card, no commitment. See if it works before you spend a cent.</p>
              </div>
              <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>Try it free →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-dark">
        <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Pick your scenario. <em style={{ fontStyle: "italic", color: "var(--rust2)" }}>Get your script.</em>
        </h2>
        <p style={{ fontSize: "0.875rem", color: "rgba(249,245,239,0.4)", marginBottom: "1.5rem" }}>
          First 3 sessions free. No credit card.
        </p>
        <a href="https://talk-prep.replit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-rust btn-lg">Start preparing →</a>
      </div>

      <SiteFooter />
    </div>
  );
}
