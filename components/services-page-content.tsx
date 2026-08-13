"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Building2,
  Cloud,
  Code2,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DevelopmentProcess, FAQAccordion, TechStackPills } from "@/components/template-page";

type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  tags: string[];
};

const coreServices: ServiceItem[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Autonomous workflows, intelligent document processing, and RPA that eliminate repetitive work at scale.",
    icon: Bot,
    featured: true,
    tags: ["Workflows", "RPA", "Document AI"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Self-learning agents with multi-step reasoning, contextual decisions, and automated execution.",
    icon: Brain,
    tags: ["Copilots", "RAG", "Multi-agent"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software",
    description:
      "Engineered-to-order platforms built for performance, security, and long-term scalability.",
    icon: Code2,
    tags: ["Enterprise", "APIs", "Integrations"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "Multi-tenant cloud-native products from architecture through launch and growth.",
    icon: Layers,
    tags: ["Multi-tenant", "Billing", "Analytics"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance web apps with modern frameworks, serverless backends, and responsive UI.",
    icon: Globe,
    tags: ["Next.js", "React", "Serverless"],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Native and cross-platform iOS & Android experiences with offline resilience.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Migration, container orchestration, and auto-scaling on AWS, Azure, and GCP.",
    icon: Cloud,
    tags: ["AWS", "Kubernetes", "Serverless"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Research-backed interfaces, design systems, and conversion-focused experiences.",
    icon: Palette,
    tags: ["Design systems", "Prototyping", "Research"],
  },
  {
    slug: "devops",
    title: "DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, and 24/7 reliability engineering.",
    icon: GitBranch,
    tags: ["CI/CD", "IaC", "Monitoring"],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    description:
      "Mission-critical platforms with enterprise security and legacy integration.",
    icon: Building2,
    tags: ["Security", "Compliance", "Legacy"],
  },
];

const metrics = [
  { value: "40+", label: "AI systems delivered" },
  { value: "120+", label: "Processes automated" },
  { value: "99.9%", label: "Production uptime" },
  { value: "8–16 wk", label: "Typical enterprise delivery" },
];

const deliverables = [
  "Technical discovery & architecture blueprint",
  "Security-first engineering & compliance review",
  "Production deployment with observability",
  "Knowledge transfer & ongoing support options",
];

export default function ServicesPageContent() {
  return (
    <div className="page-wrap services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__copy">
          <p className="route-label">
            <Sparkles size={13} /> SERVICES / 02
            <span>Enterprise Engineering</span>
          </p>
          <h1>
            Precision-built
            <span className="services-hero__accent"> digital services</span>
            for ambitious teams
          </h1>
          <p className="services-hero__lead">
            From AI automation to enterprise platforms — we partner with organizations
            that need reliable engineering, clear delivery, and measurable outcomes.
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
            <Link href="/portfolio" className="secondary-button">
              View Case Studies <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <aside className="services-hero__panel" aria-label="Key metrics">
          <p className="services-hero__panel-label">Delivery at a glance</p>
          <dl className="services-metrics">
            {metrics.map(({ value, label }) => (
              <div key={label} className="services-metrics__item">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="services-hero__panel-note">
            Structured engagements with defined milestones, transparent communication,
            and production-grade handoff.
          </p>
        </aside>
      </section>

      {/* Offerings */}
      <section className="services-section">
        <div className="services-section__head">
          <div>
            <p className="services-eyebrow">What we deliver</p>
            <h2>Core service offerings</h2>
          </div>
          <p>
            Ten focused practice areas — each led by senior engineers and designed
            for enterprise reliability.
          </p>
        </div>

        <div className="services-bento">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`services-card${service.featured ? " services-card--featured" : ""}`}
              >
                <div className="services-card__top">
                  <span className="services-card__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight size={16} className="services-card__arrow" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="services-card__tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process + deliverables */}
      <section className="services-section services-split">
        <div>
          <p className="services-eyebrow">How we work</p>
          <h2>End-to-end delivery framework</h2>
          <p className="services-split__intro">
            A proven six-phase methodology that reduces risk, accelerates time-to-value,
            and keeps stakeholders aligned from discovery through scale.
          </p>
          <ul className="services-deliverables">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <DevelopmentProcess />
      </section>

      {/* Tech stack */}
      <section className="services-section services-stack">
        <div className="services-section__head services-section__head--center">
          <div>
            <p className="services-eyebrow">Technology</p>
            <h2>Stack we ship with</h2>
          </div>
          <p>
            Modern, battle-tested tooling chosen for maintainability — not hype.
          </p>
        </div>
        <TechStackPills />
      </section>

      {/* FAQ */}
      <section className="services-section">
        <div className="services-section__head">
          <div>
            <p className="services-eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
        </div>
        <FAQAccordion />
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <p className="services-eyebrow">Next step</p>
          <h2>Ready to scope your project?</h2>
          <p>
            Share your goals and constraints — we&apos;ll respond with a clear path
            forward, timeline estimate, and engagement model.
          </p>
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
  );
}
