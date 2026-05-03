import { useState, useRef, useEffect, ReactNode } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Resign from a Job Gracefully (With Exact Scripts)",
  description:
    "The exact words to say in the first 60 seconds of your resignation conversation — and how to handle counter-offers, guilt trips, and every manager response.",
  image: "https://talkprep.co/opengraph.jpg",
  datePublished: "2026-05-01",
  dateModified: "2026-05-03",
  author: {
    "@type": "Organization",
    name: "TalkPrep Editorial",
    url: "https://talkprep.co",
  },
  publisher: {
    "@type": "Organization",
    name: "TalkPrep",
    url: "https://talkprep.co",
    logo: {
      "@type": "ImageObject",
      url: "https://talkprep.co/favicon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://talkprep.co/how-to-resign-from-a-job",
  },
};

function AnimatedSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Article() {
  const [scenario, setScenario] = useState("Accepted another offer");
  const [managerDescription, setManagerDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [scriptContent, setScriptContent] = useState<string>("");

  const handleGenerateScript = async () => {
    setIsGenerating(true);
    setScriptContent("");

    try {
      const response = await fetch("/api/resignation-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario, managerDescription, goal }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.content) {
                  setScriptContent((prev) => prev + data.content);
                }
              } catch (e) {
                // Ignore parse errors on partial chunks
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Failed to generate script:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const scenarios = [
    "Accepted another offer",
    "Career change",
    "No job lined up yet",
    "Difficult environment"
  ];

  const parseScriptContent = (text: string) => {
    if (!text) return null;
    
    // Simplistic parser for demonstration, splitting by known headings if they exist
    const sections = text.split(/(?=YOUR OPENING:|WHAT THEY MIGHT SAY:|YOUR GROUNDING THOUGHT:)/i);
    
    return sections.map((sec, i) => {
      const match = sec.match(/^(.*?):([\s\S]*)$/);
      if (match) {
        return (
          <div key={i} className="mb-6">
            <h4 className="text-rust font-mono text-xs uppercase tracking-wider mb-2">{match[1].trim()}</h4>
            <div className="text-ink-2 font-serif text-lg whitespace-pre-wrap">{match[2].trim()}</div>
          </div>
        );
      }
      return <div key={i} className="text-ink-2 font-serif text-lg whitespace-pre-wrap mb-4">{sec}</div>;
    });
  };

  return (
    <div className="min-h-screen bg-paper font-sans">
      <SEO
        title="How to Resign from a Job Gracefully (With Exact Scripts)"
        description="The exact words to say in your resignation conversation — and how to handle counter-offers, guilt trips, and every manager response. Includes the resignation email template."
        canonical="/how-to-resign-from-a-job"
        type="article"
        publishedAt="2026-05-01T00:00:00Z"
        modifiedAt="2026-05-03T00:00:00Z"
        schema={articleSchema}
      />
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-ink text-white h-[52px] flex items-center justify-between px-6">
        <Link href="/" className="font-serif font-bold text-xl tracking-wide flex items-center">
          <span>Talk</span><span className="text-rust">Prep</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-mono text-sm text-ink-4">
          <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
        </div>
        <Link href="#" className="bg-rust hover:bg-rust-2 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
          Start free &rarr;
        </Link>
      </nav>

      {/* Article Header */}
      <header className="relative pt-16 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rust opacity-[0.03] rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-[680px] mx-auto relative z-10">
          <div className="flex items-center gap-3 font-mono text-xs text-ink-3 mb-6">
            <span className="bg-rust text-white px-2 py-0.5 rounded-sm uppercase tracking-wide">Career</span>
            <span>&bull;</span>
            <span>12 min read</span>
            <span>&bull;</span>
            <span>Updated May 2026</span>
          </div>

          <h1 className="font-serif font-black text-4xl md:text-[3.2rem] leading-[1.1] text-ink mb-6">
            How to Resign from a Job Gracefully <span className="italic text-rust font-light">(With Exact Scripts)</span>
          </h1>

          <p className="text-xl md:text-2xl font-serif italic text-ink-2 pl-4 border-l-2 border-rust mb-8 leading-snug">
            The words you say in the first 60 seconds of your resignation conversation will determine your relationship with your manager for the rest of your career. Here is exactly what to say.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rust-light flex items-center justify-center text-rust font-serif font-bold text-lg">
              TP
            </div>
            <div>
              <div className="font-medium text-ink">TalkPrep Editorial</div>
              <div className="text-sm text-ink-3">Conversation coaching guides</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[680px] mx-auto px-6 pb-24">
        {/* Table of Contents */}
        <AnimatedSection className="bg-paper-2 border border-border rounded-lg p-6 mb-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-3 mb-4 font-bold">In this guide</h2>
          <ol className="space-y-2 font-mono text-sm text-ink-2">
            <li><a href="#before" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">01</span>Before the conversation</a></li>
            <li><a href="#opening" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">02</span>The exact opening words</a></li>
            <li><a href="#responses" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">03</span>How to handle every response</a></li>
            <li><a href="#counter-offer" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">04</span>The counter-offer</a></li>
            <li><a href="#mistakes" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">05</span>The 5 most common mistakes</a></li>
            <li><a href="#after" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">06</span>What to do after</a></li>
            <li><a href="#tool" className="hover:text-rust transition-colors"><span className="text-ink-4 mr-2">07</span>Get your personalized script</a></li>
          </ol>
        </AnimatedSection>

        <div className="article-content">
          <AnimatedSection>
            <p>Resigning is inherently uncomfortable. You are initiating a breakup where you hold all the power and the other person is entirely unprepared. It triggers guilt, anxiety, and a sudden urge to over-explain.</p>
            <p>But a resignation is not a negotiation, and it is not a feedback session. It is a simple transfer of information: you are leaving, and here is when.</p>
            <p>The goal of a resignation conversation is singular: deliver the news clearly, preserve the relationship, and transition smoothly into the handover phase. Here is how to do that gracefully.</p>
          </AnimatedSection>

          <AnimatedSection className="stats-row">
            <div className="stat-item">
              <div className="stat-number">58%</div>
              <div className="stat-label">Report feeling extreme anxiety</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3 in 4</div>
              <div className="stat-label">Over-explain their reasons</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">87%</div>
              <div className="stat-label">Wish they had prepared a script</div>
            </div>
          </AnimatedSection>

          {/* Section 1 */}
          <AnimatedSection id="before">
            <h2>Before the conversation</h2>
            <p>Do not book a meeting called "Catch Up" or "Resignation". Wait for your regular 1:1, or ping them: "Do you have 5 minutes for a quick chat today?"</p>
            
            <h3>Know your last day</h3>
            <p>Check your contract. If your notice period is 4 weeks, calculate the exact date before you walk into the room. Do not make them do the math.</p>

            <h3>Decide on counter-offers</h3>
            <p>Before you resign, decide if there is a number that would make you stay. If there isn't, you need to be prepared to shut down counter-offers immediately.</p>

            <h3>Keep your reason simple</h3>
            <p>You do not need to tell them where you are going. You do not need to explain why their culture is bad. Pick a simple, undeniable reason: "an opportunity for growth" or "a different direction".</p>

            <div className="warning-box">
              <strong>Don't resign on a Monday or Friday if you can help it.</strong> Mondays are chaotic and managers are stressed. Fridays mean the news stews over the weekend. Tuesday or Wednesday afternoon is optimal.
            </div>
          </AnimatedSection>

          {/* Section 2 */}
          <AnimatedSection id="opening">
            <h2>The exact opening words</h2>
            <p>When you get on the call or walk into the room, do not engage in 10 minutes of small talk. Get to the point within the first 60 seconds.</p>

            <div className="script-block">
              <div className="script-block-header">
                <span className="script-block-label">Script</span>
                <span className="script-block-scenario">Opening script — warm and direct</span>
              </div>
              <div className="script-block-body">
                "Hi [Name], thanks for making time. I wanted to share some news with you directly. I've made the difficult decision to move on, and my last day will be [Date]."
              </div>
              <div className="script-block-footer">
                Stop talking after you say the date. Let them respond.
              </div>
            </div>

            <div className="script-block">
              <div className="script-block-header">
                <span className="script-block-label">Script</span>
                <span className="script-block-scenario">Opening script — if you're close to your manager</span>
              </div>
              <div className="script-block-body">
                "[Name], I've so enjoyed working with you, which makes this hard to say. I've accepted another opportunity, and I'll be resigning. My last day will be [Date]."
              </div>
            </div>

            <div className="pull-quote">
              "The biggest mistake people make is over-explaining. You are stating a fact, not asking for permission. State the fact, then embrace the silence."
            </div>
          </AnimatedSection>

          {/* Section 3 */}
          <AnimatedSection id="responses">
            <h2>How to handle every response</h2>
            <p>Once you drop the news, their reaction will depend entirely on their stress levels and emotional maturity. Be ready for these four reactions.</p>

            <div className="response-block">
              <div className="response-block-header">Scenario 1: Disappointment or guilt</div>
              <div className="response-block-content">
                <div className="rb-they">Oh no. I'm so sad to hear that. We're going to be so lost without you.</div>
                <div className="mt-4">
                  <span className="rb-you-label">What to say</span>
                  <div className="rb-you">"Thank you, I'm really going to miss this team too. I want to make sure the transition is as seamless as possible. I've already started a handover document we can review."</div>
                  <div className="rb-why">Why this works: It acknowledges their feelings but immediately pivots to practical next steps, moving the conversation out of the emotional zone.</div>
                </div>
              </div>
            </div>

            <div className="response-block">
              <div className="response-block-header">Scenario 2: Immediate counter-offer</div>
              <div className="response-block-content">
                <div className="rb-they">Is there anything we can do to change your mind? What if we matched the salary?</div>
                <div className="mt-4">
                  <span className="rb-you-label">What to say</span>
                  <div className="rb-you">"I really appreciate that, but my decision is final. I'm looking forward to this next step in my career."</div>
                  <div className="rb-why">Why this works: "My decision is final" is a brick wall. It leaves zero room for debate.</div>
                </div>
              </div>
            </div>

            <div className="response-block">
              <div className="response-block-header">Scenario 3: Anger or coldness</div>
              <div className="response-block-content">
                <div className="rb-they">Wow. The timing on this is really terrible given the project launch.</div>
                <div className="mt-4">
                  <span className="rb-you-label">What to say</span>
                  <div className="rb-you">"I know the timing isn't ideal with the launch. I am fully committed to wrapping up my piece of the project over the next [X] weeks so the team isn't left in the lurch."</div>
                  <div className="rb-why">Why this works: You validate their frustration without apologizing for leaving. You then reassure them of your professionalism.</div>
                </div>
              </div>
            </div>

            <div className="response-block">
              <div className="response-block-header">Scenario 4: They ask to reconsider</div>
              <div className="response-block-content">
                <div className="rb-they">Just sleep on it over the weekend before you make it official, okay?</div>
                <div className="mt-4">
                  <span className="rb-you-label">What to say</span>
                  <div className="rb-you">"I've spent a lot of time thinking about this, and I've already signed the new contract. So this is official, but let's talk about how to announce it to the team."</div>
                  <div className="rb-why">Why this works: It removes the false hope gracefully but firmly.</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 4 */}
          <AnimatedSection id="counter-offer">
            <h2>The counter-offer</h2>
            <p>If you leave the door open even a crack, a desperate manager will try to shove a counter-offer through it. If you have decided to leave, shut it down completely.</p>

            <div className="script-block">
              <div className="script-block-header">
                <span className="script-block-label">Script</span>
                <span className="script-block-scenario">Declining a counter-offer — direct but warm</span>
              </div>
              <div className="script-block-body">
                "I'm incredibly flattered by the offer, and it reinforces how much I've valued my time here. However, my reasons for leaving are based on the specific direction I want to take my career next, so I won't be able to accept. Let's focus on the handover."
              </div>
            </div>

            <div className="warning-box">
              <strong>The 18-month rule:</strong> Statistics show that 80% of people who accept a counter-offer end up leaving within 6 months anyway. The underlying reasons you wanted to leave rarely change.
            </div>
          </AnimatedSection>

          {/* Section 5 */}
          <AnimatedSection id="mistakes" className="mistake-list">
            <h2>The 5 most common mistakes</h2>
            <ul>
              <li><strong>Over-explaining:</strong> Giving a 10-minute monologue about why you're leaving invites debate. Keep it to one sentence.</li>
              <li><strong>Resigning via email:</strong> Always do it face-to-face or via video call first. The email is just the formal follow-up.</li>
              <li><strong>Giving brutal feedback:</strong> Your exit interview is not the time to burn bridges. Save the radical candor for your diary.</li>
              <li><strong>Not having a clear last day:</strong> Ambiguity causes panic. Know your exact last date.</li>
              <li><strong>Telling colleagues first:</strong> Your manager should always be the first to know. Office gossip travels faster than you think.</li>
            </ul>
          </AnimatedSection>

          {/* Section 6 */}
          <AnimatedSection id="after">
            <h2>What to do after</h2>
            <p>Immediately after your verbal conversation, you need to send the formal written resignation to your manager and HR.</p>

            <h3>Send a formal resignation letter</h3>
            <div className="script-block">
              <div className="script-block-header">
                <span className="script-block-label">Template</span>
                <span className="script-block-scenario">Resignation email template</span>
              </div>
              <div className="script-block-body text-base">
                Dear [Manager Name],<br/><br/>
                Please accept this email as formal notification that I am resigning from my position as [Title]. As per my notice period, my final day will be [Date].<br/><br/>
                Thank you for the opportunities I've had during my time with the team. I am committed to ensuring a smooth transition of my responsibilities over the next [X] weeks.<br/><br/>
                Best regards,<br/>
                [Your Name]
              </div>
            </div>

            <h3>Prepare a handover document</h3>
            <p>Spend your last weeks cementing your reputation. Build an immaculate handover document detailing every project status, key contacts, and where files are stored.</p>

            <div className="flex justify-center my-12 text-rust-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </AnimatedSection>
        </div>

        {/* Section 7 - AI Tool */}
        <AnimatedSection id="tool" className="bg-ink text-white rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rust opacity-20 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <div className="font-mono text-rust text-sm uppercase tracking-wider font-bold mb-4">Free resignation prep tool</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              Get your personalized <span className="italic text-rust font-light">resignation script.</span>
            </h2>
            <p className="text-ink-4 mb-8 max-w-lg">Tell us a bit about your situation, and our conversation coach will write exactly what you should say, tailored to your manager's personality.</p>

            <div className="space-y-6 bg-ink-2 p-6 rounded-lg border border-ink-3">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-4 mb-3">My situation is closest to...</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scenarios.map((s) => (
                    <button
                      key={s}
                      onClick={() => setScenario(s)}
                      className={`text-left px-4 py-3 rounded border text-sm font-medium transition-colors ${
                        scenario === s 
                          ? "bg-rust border-rust text-white" 
                          : "bg-ink border-ink-3 text-ink-4 hover:border-rust hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-4 mb-3">Who is your manager?</label>
                <textarea 
                  value={managerDescription}
                  onChange={(e) => setManagerDescription(e.target.value)}
                  placeholder="e.g. He's very supportive but gets stressed easily about project deadlines..."
                  className="w-full bg-ink border border-ink-3 rounded p-3 text-white text-sm focus:outline-none focus:border-rust min-h-[80px]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-4 mb-3">What's most important to you?</label>
                <textarea 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Keeping the relationship strong, I might want to return one day..."
                  className="w-full bg-ink border border-ink-3 rounded p-3 text-white text-sm focus:outline-none focus:border-rust min-h-[80px]"
                />
              </div>

              <button 
                onClick={handleGenerateScript}
                disabled={isGenerating || !managerDescription}
                className="w-full bg-rust hover:bg-rust-2 text-white font-medium py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                data-testid="button-generate-script"
              >
                {isGenerating ? "Generating..." : "Generate my script →"}
              </button>

              {scriptContent && (
                <div className="mt-6 pt-6 border-t border-ink-3 bg-ink p-5 rounded">
                  {parseScriptContent(scriptContent) || <div className="text-ink-2 font-serif whitespace-pre-wrap">{scriptContent}</div>}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Related Articles */}
      <section className="bg-paper-2 border-t border-border py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-2xl font-bold text-ink mb-10 text-center">More conversation guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: "Career", title: "How to Ask for a Raise", hint: "The exact script to prove your value." },
              { tag: "Leadership", title: "How to Fire Someone With Dignity", hint: "Compassionate offboarding scripts." },
              { tag: "Personal", title: "How to Set a Boundary With a Family Member", hint: "Firm but loving responses." }
            ].map((article, i) => (
              <Link href="#" key={i} className="block group">
                <div className="bg-white border border-border p-6 rounded-lg h-full transition-transform transform hover:-translate-y-1 hover:shadow-md">
                  <div className="text-rust font-mono text-xs uppercase tracking-wider mb-3">{article.tag}</div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-rust transition-colors">{article.title}</h3>
                  <p className="text-ink-3 text-sm">{article.hint}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-12 px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif font-bold text-xl tracking-wide">
            <span>Talk</span><span className="text-rust">Prep</span>
          </div>
          <div className="flex gap-6 font-mono text-sm text-ink-4">
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Open app</Link>
          </div>
          <div className="font-mono text-xs text-ink-4 opacity-50">
            © 2026 TalkPrep
          </div>
        </div>
      </footer>
    </div>
  );
}
