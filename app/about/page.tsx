import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { Sparkles } from "lucide-react";
import { Section, CompanyIntroCards, TeamMembers } from "@/components/template-page";

export const metadata: Metadata = {
  title: "About Us · SkillYug Technologies",
  description: "SkillYug Technologies is an AI-first technology company building custom software, automation, SaaS, and scalable digital products.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> ABOUT OUR COMPANY
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                Building Tomorrow's Digital Solutions
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                SkillYug Technologies is an AI-first technology company that builds AI products, intelligent automation systems, enterprise software, SaaS platforms, web applications, mobile apps, and digital solutions that help businesses innovate, automate, and scale.
              </p>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>Core Expertise</h2>
            <CompanyIntroCards />
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Section name="Meet Our Leadership" index={1}>
            <TeamMembers />
          </Section>
        </div>
      </div>
    </SiteShell>
  );
}
