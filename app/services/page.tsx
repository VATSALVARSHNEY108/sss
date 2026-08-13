import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Layers3, Sparkles, Workflow } from "lucide-react";
import SiteShell from "@/components/site-shell";
import { ServicesInteractive } from "@/components/services-interactive";

export const metadata: Metadata = {
  title: "AI Services · SkillYug Technologies",
  description:
    "Explore SkillYug Technologies' complete catalog of AI services, automation solutions, and custom AI engineering capabilities.",
};

const stats = [
  { value: "27", label: "service categories", icon: Layers3 },
  { value: "250+", label: "AI capabilities", icon: Bot },
  { value: "120+", label: "workflows automated", icon: Workflow },
];

const techStack = [
  "Python & PyTorch",
  "TypeScript & Next.js",
  "Node.js & Go",
  "AWS & Cloud Native",
  "Docker & Kubernetes",
  "PostgreSQL & Vector DBs",
  "OpenAI & Claude APIs",
  "GraphQL & REST APIs",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="page-wrap services-page services-catalog-page">
        <section className="catalog-hero">
          <div className="catalog-hero__copy">
            <p className="route-label">
              <Sparkles size={13} /> SERVICES / AI CATALOG
              <span>Built around your workflow</span>
            </p>
            <h1>
              AI services for
              <span className="services-hero__accent"> every ambition.</span>
            </h1>
            <p className="services-hero__lead">
              From a focused assistant to a fully autonomous operating layer, explore
              the capabilities we can design, integrate, and ship for your team.
            </p>
            <div className="services-hero__actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Discuss a Project <ArrowUpRight size={16} />
              </a>
              <a href="#catalog" className="secondary-button">
                Explore the catalog <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="catalog-hero__signal" aria-label="Service catalog overview">
            <div className="catalog-hero__signal-orbit" />
            <div className="catalog-hero__signal-core">
              <Bot size={32} />
              <span>AI<br />ENGINEERING</span>
            </div>
            <span className="catalog-orbit-label catalog-orbit-label--one">AUTOMATE</span>
            <span className="catalog-orbit-label catalog-orbit-label--two">AUGMENT</span>
            <span className="catalog-orbit-label catalog-orbit-label--three">SCALE</span>
          </div>
        </section>

        <section className="catalog-stats" aria-label="Catalog highlights">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="catalog-stat" key={label}>
              <Icon size={18} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="catalog" className="catalog-section">
          <div className="catalog-section__head">
            <div>
              <p className="services-eyebrow">The full portfolio</p>
              <h2>Find the right AI capability</h2>
            </div>
            <p>
              Choose a category to see the solutions we can tailor to your systems,
              customers, and operating model.
            </p>
          </div>
          <ServicesInteractive />
        </section>

        <section className="catalog-tech services-section">
          <div className="services-section__head services-section__head--center">
            <div>
              <p className="services-eyebrow">Our Tech Stack</p>
              <h2>Built on dependable foundations</h2>
            </div>
            <p>
              Modern, battle-tested tools chosen for maintainability, security, and
              production scale.
            </p>
          </div>
          <div className="catalog-tech-grid">
            {techStack.map((item, index) => (
              <div className="catalog-tech-card" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="services-cta">
          <div>
            <p className="services-eyebrow">Have a specific use case?</p>
            <h2>Let&apos;s turn the right idea into a working system.</h2>
            <p>Tell us what you want to improve. We&apos;ll map the fastest path from opportunity to production.</p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button services-cta__btn"
          >
            Start a Conversation <ArrowUpRight size={16} />
          </a>
        </section>
      </div>
    </SiteShell>
  );
}
