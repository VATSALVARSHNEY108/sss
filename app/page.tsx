import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import SiteShell from "@/components/site-shell";
import {
  Section,
  CompanyIntroCards,
  ServiceCards,
  ProductCards,
  IndustryCards,
  DevelopmentProcess,
  TechStackPills,
  CaseStudyCards,
  TestimonialCards,
  FAQAccordion
} from "@/components/template-page";

import { RobotSection } from "@/components/robot-demo";

export const metadata: Metadata = {
  title: "SkillYug Technologies | AI Solutions, Software Development & Business Automation",
  description: "SkillYug Technologies builds AI-powered products, enterprise software, SaaS platforms, intelligent automation systems, and scalable digital solutions.",
};

export default function Home() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <section className="page-hero">
          <div>
            <p className="kicker">
              <Sparkles size={13} /> INTELLIGENT SOFTWARE & AI PLATFORMS
            </p>
            <h1>
              Build AI That Works.
              <br />
              Scale Businesses That Last.
            </h1>
            <p className="hero-copy">
              We design intelligent software, AI automation, and scalable digital products that transform ambitious ideas into real-world solutions.
            </p>
            <div className="hero-actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Start Your Project <ArrowUpRight size={16} />
            </a>
            <Link href="/portfolio" className="secondary-button">
              Explore Our Work <ArrowUpRight size={16} />
            </Link>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "300px" }}>
            <RobotSection />
          </div>
        </section>

        <Section name="Trusted By" index={0}>
          <div className="logo-row">
            <span>HAARWALA.ORG</span>
            <span>NEXUS LABS</span>
            <span>AURA GLOBAL</span>
            <span>VANGUARD SYSTEMS</span>
            <span>APEX AI</span>
          </div>
        </Section>

        <Section name="Building Tomorrow's Digital Solutions" index={1}>
          <CompanyIntroCards />
        </Section>

        <Section name="Featured Products" index={4}>
          <ProductCards />
        </Section>

        <Section name="Industries We Serve" index={5}>
          <IndustryCards />
        </Section>

        <div style={{ marginTop: "40px" }}>
          <section className="contact-band">
            <Quote size={28} style={{ color: "var(--electric)" }} />
            <h2>Let's Build the Future Together</h2>
            <p>Whether you're launching a startup, modernizing your business, or building the next AI-powered platform, SkillYug Technologies is ready to help.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "12px", flexWrap: "wrap" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start Your Project <ArrowUpRight size={16} />
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Book a Consultation <ArrowUpRight size={16} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
