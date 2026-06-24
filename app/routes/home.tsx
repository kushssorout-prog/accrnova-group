import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "ACCRNOVA Group — Architecture of Tomorrow" },
    {
      name: "description",
      content:
        "ACCRNOVA Group is a technology, legal, and infrastructure conglomerate. Home of Axiom AI, AryaSolon Legal, Zenithustra, and Q Commerce.",
    },
    { property: "og:title", content: "ACCRNOVA Group — Architecture of Tomorrow" },
    {
      property: "og:description",
      content:
        "ACCRNOVA Group is a technology, legal, and infrastructure conglomerate. Home of Axiom AI, AryaSolon Legal, Zenithustra, and Q Commerce.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const companies = [
  {
    id: "accrnova",
    accent: "blue",
    monogram: "AN",
    name: "ACCRNOVA Private Limited",
    type: "Technology",
    headline: "AI Governance for the Enterprise",
    body: "The home of the Axiom platform — deterministic AI governance infrastructure for law firms, financial services, and regulated industries globally.",
    tags: ["Axiom Core", "Axiom Legal", "Axiom Health", "Axiom Safe"],
    ctaLabel: "Explore Axiom →",
    ctaHref: "https://axiom-landing-d1wced.camelai.app",
  },
  {
    id: "aryasolon",
    accent: "gold",
    monogram: "AS",
    name: "AryaSolon Strategies LLP",
    type: "Legal & Advisory",
    headline: "Precision in Contract Lifecycle Management",
    body: "Premier corporate law firm headquartered in Bangalore. 100% CLM accuracy, multi-stakeholder expertise, and strategic corporate advisory for businesses of all scales.",
    tags: ["CLM", "Corporate Advisory", "Due Diligence", "Secretarial"],
    ctaLabel: "Visit AryaSolon →",
    ctaHref: "https://aryasolon-corporate-law-clm.vercel.app/",
  },
  {
    id: "zenithustra",
    accent: "teal",
    monogram: "ZP",
    name: "Zenithustra Private Limited",
    type: "Infrastructure & Technology",
    headline: "Building Physical and Digital Futures",
    body: "End-to-end project delivery across agritech management systems, fitness & gym platforms, custom app portfolios, and physical infrastructure development.",
    tags: ["AgriTech", "Gym Management", "App Development", "Physical Projects"],
    ctaLabel: "Explore Zenithustra →",
    ctaHref: "https://zenithustra-d1wced.camelai.app",
  },
  {
    id: "qcommerce",
    accent: "coral",
    monogram: "QC",
    name: "Q Commerce",
    type: "Consumer & Retail",
    headline: "Intelligence. Delivered.",
    body: "AI-governed ecommerce platform offering personalised product recommendations, price-arbitraged shipping, and the consumer-facing Axiom Safe product suite.",
    tags: ["Axiom Safe", "Intelligence Reports", "Advisory", "Premium Bundles"],
    ctaLabel: "Shop Q Commerce →",
    ctaHref: "https://q-commerce-d1wced.camelai.app",
  },
];

const principles = [
  {
    num: "01.",
    title: "Determinism",
    body: "We build systems that produce reliable, predictable outcomes. Probability is not a governance strategy.",
  },
  {
    num: "02.",
    title: "Long-Term Capital",
    body: "We build for decades, not quarters. Every investment decision considers 10-year structural value.",
  },
  {
    num: "03.",
    title: "Human Authority",
    body: "Technology amplifies human capability. It never replaces human judgment on consequential decisions.",
  },
];

function CompanyTree() {
  return (
    <div className="ac-tree-container">
      <svg
        viewBox="0 0 360 440"
        width="360"
        height="440"
        style={{ overflow: "visible" }}
        aria-label="ACCRNOVA Group structure diagram"
      >
        {/* Lines from root to children */}
        <line x1="180" y1="90" x2="60"  y2="220" stroke="rgba(201,149,42,0.25)" strokeWidth="1.5" />
        <line x1="180" y1="90" x2="140" y2="220" stroke="rgba(201,149,42,0.25)" strokeWidth="1.5" />
        <line x1="180" y1="90" x2="220" y2="220" stroke="rgba(201,149,42,0.25)" strokeWidth="1.5" />
        <line x1="180" y1="90" x2="300" y2="220" stroke="rgba(201,149,42,0.25)" strokeWidth="1.5" />

        {/* Root node — ACCRNOVA GROUP */}
        <g className="ac-tree-node">
          <circle cx="180" cy="68" r="32" fill="rgba(201,149,42,0.1)" stroke="rgba(201,149,42,0.5)" strokeWidth="1.5" />
          <circle cx="180" cy="68" r="10" fill="#C9952A" className="ac-pulse-circle" />
          <text x="180" y="116" textAnchor="middle" fill="#C9952A" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="12">ACCRNOVA GROUP</text>
        </g>

        {/* Company node: ACCRNOVA Pvt Ltd */}
        <g className="ac-tree-node">
          <circle cx="60" cy="240" r="24" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" />
          <circle cx="60" cy="240" r="8" fill="#2563EB" />
          <text x="60" y="280" textAnchor="middle" fill="#F4F6FA" fontFamily="'Inter',sans-serif" fontSize="10" fontWeight="500">ACCRNOVA</text>
          <text x="60" y="294" textAnchor="middle" fill="#6B7280" fontFamily="'Inter',sans-serif" fontSize="10">Pvt Ltd</text>
        </g>

        {/* Company node: AryaSolon */}
        <g className="ac-tree-node">
          <circle cx="140" cy="240" r="24" fill="rgba(201,149,42,0.12)" stroke="rgba(201,149,42,0.4)" strokeWidth="1.5" />
          <circle cx="140" cy="240" r="8" fill="#C9952A" />
          <text x="140" y="280" textAnchor="middle" fill="#F4F6FA" fontFamily="'Inter',sans-serif" fontSize="10" fontWeight="500">AryaSolon</text>
          <text x="140" y="294" textAnchor="middle" fill="#6B7280" fontFamily="'Inter',sans-serif" fontSize="10">Strategies</text>
        </g>

        {/* Company node: Zenithustra */}
        <g className="ac-tree-node">
          <circle cx="220" cy="240" r="24" fill="rgba(13,148,136,0.12)" stroke="rgba(13,148,136,0.4)" strokeWidth="1.5" />
          <circle cx="220" cy="240" r="8" fill="#0D9488" />
          <text x="220" y="280" textAnchor="middle" fill="#F4F6FA" fontFamily="'Inter',sans-serif" fontSize="10" fontWeight="500">Zenithustra</text>
          <text x="220" y="294" textAnchor="middle" fill="#6B7280" fontFamily="'Inter',sans-serif" fontSize="10">Pvt Ltd</text>
        </g>

        {/* Company node: Q Commerce */}
        <g className="ac-tree-node">
          <circle cx="300" cy="240" r="24" fill="rgba(224,92,46,0.12)" stroke="rgba(224,92,46,0.4)" strokeWidth="1.5" />
          <circle cx="300" cy="240" r="8" fill="#E05C2E" />
          <text x="300" y="280" textAnchor="middle" fill="#F4F6FA" fontFamily="'Inter',sans-serif" fontSize="10" fontWeight="500">Q Commerce</text>
          <text x="300" y="294" textAnchor="middle" fill="#6B7280" fontFamily="'Inter',sans-serif" fontSize="10">Consumer</text>
        </g>

        {/* Bottom label */}
        <text x="180" y="360" textAnchor="middle" fill="rgba(107,114,128,0.5)" fontFamily="'Inter',sans-serif" fontSize="11">One Group. Four Pillars.</text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="ac-navbar">
        <div className="ac-wordmark">
          <div className="ac-wordmark-line">
            <span className="accr">ACCR</span>
            <span className="nova">NOVA</span>
          </div>
          <div className="ac-wordmark-group">GROUP</div>
        </div>

        <div className="ac-nav-links">
          <a href="#about">About</a>
          <a href="#companies">Companies</a>
          <a href="#ventures">Ventures</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="ac-nav-cta">Connect With Us →</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="ac-hero">
        <div className="ac-hero-grid" aria-hidden="true" />
        <div className="ac-hero-glow" aria-hidden="true" />

        <div className="ac-hero-inner">
          <div className="ac-eyebrow">
            <div className="ac-eyebrow-line" />
            <span className="ac-eyebrow-text">ACCRNOVA GROUP</span>
            <div className="ac-eyebrow-line" />
          </div>

          <h1 className="ac-hero-h1">
            The Architecture<br />
            <span className="ac-gold-text">of Tomorrow.</span>
          </h1>

          <div className="ac-hero-rule" aria-hidden="true" />

          <p className="ac-hero-body">
            ACCRNOVA Group builds and governs critical technology infrastructure, legal
            excellence, and human-centred innovation platforms. Operating at the
            intersection of AI, law, and the physical world.
          </p>

          <div className="ac-hero-ctas">
            <a href="#companies" className="ac-btn-gold">
              Explore Our Companies →
            </a>
            <a href="#ventures" className="ac-btn-ghost">
              Our Vision
            </a>
          </div>
        </div>

        <div className="ac-scroll-indicator" aria-hidden="true">
          <div className="ac-scroll-line" />
          <div className="ac-scroll-dot" />
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <section className="ac-mission">
        <div className="ac-mission-grid">
          <div className="ac-mission-item">
            <div className="ac-mission-number">₹∞</div>
            <div className="ac-mission-label">Ambition</div>
            <div className="ac-mission-desc">No ceiling on what we build</div>
          </div>
          <div className="ac-mission-item">
            <div className="ac-mission-number">4</div>
            <div className="ac-mission-label">Entities</div>
            <div className="ac-mission-desc">
              Operating across technology, law, and physical infrastructure
            </div>
          </div>
          <div className="ac-mission-item">
            <div className="ac-mission-number">3</div>
            <div className="ac-mission-label">Cities</div>
            <div className="ac-mission-desc">Bangalore · Delhi · Berlin</div>
          </div>
          <div className="ac-mission-item">
            <div className="ac-mission-number">1</div>
            <div className="ac-mission-label">Standard</div>
            <div className="ac-mission-desc">Absolute quality. Always.</div>
          </div>
        </div>
      </section>

      {/* ── OUR COMPANIES ── */}
      <section id="companies" className="ac-section" style={{ background: "var(--ac-surface)" }}>
        <p className="ac-section-title">The ACCRNOVA Family</p>
        <p className="ac-section-sub">
          Four independent entities. One unified standard of excellence.
        </p>

        <div className="ac-companies-grid">
          {companies.map((c) => (
            <article key={c.id} className={`ac-card ${c.accent}`}>
              <div className="ac-card-header">
                <div className={`ac-monogram ${c.accent}`}>{c.monogram}</div>
                <span className={`ac-type-pill ${c.accent}`}>{c.type}</span>
              </div>
              <div className="ac-card-company">{c.name}</div>
              <h2 className="ac-card-headline">{c.headline}</h2>
              <p className="ac-card-body">{c.body}</p>
              <div className="ac-tags">
                {c.tags.map((t) => (
                  <span key={t} className="ac-tag">{t}</span>
                ))}
              </div>
              <a
                href={c.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`ac-card-cta ${c.accent}`}
              >
                {c.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── VENTURES / PHILOSOPHY ── */}
      <section id="ventures" className="ac-ventures">
        <div className="ac-ventures-inner">
          {/* Left */}
          <div className="ac-ventures-left">
            <h2 className="ac-ventures-title">Built on First Principles.</h2>
            <p className="ac-ventures-body">
              Every entity within ACCRNOVA Group is built on a single premise: if it
              exists, it must be excellent. We do not enter markets to participate. We
              enter to redefine what is possible.
            </p>

            <div className="ac-principles">
              {principles.map((p) => (
                <div key={p.num} className="ac-principle">
                  <div className="ac-principle-num">{p.num}</div>
                  <div>
                    <div className="ac-principle-title">{p.title}</div>
                    <div className="ac-principle-body">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tree SVG */}
          <CompanyTree />
        </div>
      </section>

      {/* ── AXIOM FEATURE ── */}
      <section className="ac-axiom">
        <div className="ac-axiom-inner">
          {/* Left */}
          <div>
            <div className="ac-axiom-eyebrow">Axiom Standard</div>
            <h2 className="ac-axiom-title">
              Governing Every AI Session<br />Across the Group
            </h2>
            <p className="ac-axiom-body">
              Every AI interaction across ACCRNOVA entities — in legal research,
              financial analysis, agritech planning, or content creation — passes
              through the Axiom Circuit Breaker before processing.
            </p>
            <div className="ac-axiom-stats">
              100% Pre-flight compliance · 0 ungoverned AI sessions · Ed25519 audit trail
            </div>
            <a
              href="https://axiom-landing-d1wced.camelai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ac-btn-teal"
            >
              See Axiom in Action →
            </a>
          </div>

          {/* Right — Circuit Breaker Mockup */}
          <div className="ac-axiom-mockup">
            <div className="ac-mockup-header">
              <div className="ac-mockup-dot green" />
              <div className="ac-mockup-dot gold" />
              <div className="ac-mockup-dot red" />
              <span className="ac-mockup-title">Axiom Circuit Breaker — Live Session</span>
            </div>

            <div className="ac-mockup-row">
              <span className="ac-mockup-label">Pre-flight check</span>
              <span className="ac-mockup-badge-safe">✓ PASSED</span>
            </div>
            <div className="ac-mockup-row">
              <span className="ac-mockup-label">PII Detection</span>
              <span className="ac-mockup-badge-safe">✓ CLEAN</span>
            </div>
            <div className="ac-mockup-row">
              <span className="ac-mockup-label">Compliance Gate</span>
              <span className="ac-mockup-badge-safe">✓ ALLOWED</span>
            </div>
            <div className="ac-mockup-row">
              <span className="ac-mockup-label">Prompt injection</span>
              <span className="ac-mockup-badge-block">✗ BLOCKED</span>
            </div>
            <div className="ac-mockup-row">
              <span className="ac-mockup-label">Audit log</span>
              <span className="ac-mockup-badge-audit">Ed25519 signed</span>
            </div>
            <div className="ac-mockup-row">
              <span className="ac-mockup-label">Session outcome</span>
              <span className="ac-mockup-badge-safe">✓ GOVERNED</span>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: "12px 16px",
                background: "rgba(13,148,136,0.08)",
                borderRadius: 8,
                fontSize: 11,
                color: "var(--ac-teal)",
                fontFamily: "'Inter',sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              0 ungoverned AI sessions since deployment
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP / ABOUT ── */}
      <section id="about" className="ac-leadership">
        <p className="ac-section-title" style={{ textAlign: "center" }}>
          Built by Practitioners.
        </p>
        <div className="ac-divider" />

        <div className="ac-leader-card">
          <div className="ac-leader-avatar">HS</div>
          <h2 className="ac-leader-name">Himanshu Sorout</h2>
          <div className="ac-leader-title">
            Founder &amp; Managing Director, ACCRNOVA Group
          </div>
          <p className="ac-leader-body">
            Building the infrastructure layer for tomorrow's AI-governed enterprises.
            ACCRNOVA Group represents the convergence of legal precision, AI governance,
            and real-world project delivery.
          </p>

          <div className="ac-contact-row">
            <span>📍 Bangalore, India</span>
            <span>🌐 Berlin, Germany</span>
            <span>
              📞{" "}
              <a href="tel:+918826164299">+91 88261 64299</a>
            </span>
            <span>
              ✉️{" "}
              <a href="mailto:himanshu.s.sorout@gmail.com">
                himanshu.s.sorout@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="ac-contact">
        <div className="ac-contact-inner">
          {/* Left */}
          <div>
            <h2 className="ac-contact-title">Start a Conversation.</h2>
            <p className="ac-contact-body">
              Whether you're looking to implement Axiom, retain AryaSolon, engage
              Zenithustra for a project, or partner with the group — we respond within 24
              hours.
            </p>

            <div className="ac-contact-details">
              <div className="ac-contact-item">
                <div className="ac-contact-icon">✉</div>
                <a href="mailto:himanshu.s.sorout@gmail.com">
                  himanshu.s.sorout@gmail.com
                </a>
              </div>
              <div className="ac-contact-item">
                <div className="ac-contact-icon">📞</div>
                <a href="tel:+918826164299">+91 88261 64299</a>
              </div>
              <div className="ac-contact-item">
                <div className="ac-contact-icon">in</div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn — ACCRNOVA Group
                </a>
              </div>
              <div className="ac-contact-item">
                <div className="ac-contact-icon">📍</div>
                <span style={{ color: "var(--ac-muted)" }}>
                  Bangalore, India · Delhi · Berlin, Germany
                </span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="ac-form">
            <div className="ac-form-row">
              <div className="ac-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your full name" />
              </div>
              <div className="ac-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" />
              </div>
            </div>

            <div className="ac-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Your organisation" />
            </div>

            <div className="ac-field">
              <label htmlFor="entity">Which entity?</label>
              <select id="entity">
                <option value="">Select an entity...</option>
                <option value="accrnova">ACCRNOVA Private Limited (Axiom)</option>
                <option value="aryasolon">AryaSolon Strategies LLP (Legal)</option>
                <option value="zenithustra">Zenithustra Private Limited (Projects)</option>
                <option value="qcommerce">Q Commerce (Ecommerce)</option>
                <option value="group">Group / General Enquiry</option>
              </select>
            </div>

            <div className="ac-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project or enquiry..."
              />
            </div>

            <button type="button" className="ac-btn-submit">
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ac-footer">
        <div className="ac-footer-top">
          <div>
            <div
              className="ac-wordmark"
              style={{ fontSize: 20, marginBottom: 8 }}
            >
              <div className="ac-wordmark-line">
                <span className="accr">ACCR</span>
                <span className="nova">NOVA</span>
              </div>
              <div className="ac-wordmark-group">GROUP</div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--ac-muted)",
                marginTop: 8,
              }}
            >
              © 2026 ACCRNOVA Group. All rights reserved.
            </div>
          </div>

          <div className="ac-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a
              href="https://axiom-landing-d1wced.camelai.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACCRNOVA Pvt Ltd
            </a>
            <a
              href="https://aryasolon-corporate-law-clm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AryaSolon
            </a>
            <a
              href="https://zenithustra-d1wced.camelai.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenithustra
            </a>
            <a
              href="https://q-commerce-d1wced.camelai.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Q Commerce
            </a>
          </div>
        </div>

        <div className="ac-footer-bottom">
          <div className="ac-footer-copy">
            ACCRNOVA Group · Bangalore, India · Governing AI across the enterprise.
          </div>
          <div className="ac-axiom-badge">
            <span>⬡</span> Powered by Axiom AI Governance
          </div>
        </div>
      </footer>
    </>
  );
}
