import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { Sparkles } from "lucide-react";
import { CaseStudyCards, TestimonialCards, Section } from "@/components/template-page";

export const metadata: Metadata = {
  title: "Our Work · SkillYug Technologies",
  description: "A showcase of production-ready AI products, enterprise applications, and digital platforms delivered by SkillYug Technologies.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <section className="page-hero">
          <div>
            <p className="kicker">
              <Sparkles size={13} /> CLIENT CASE STUDIES
            </p>
            <h1>Work built for real-world impact.</h1>
            <p className="hero-copy">
              A selection of digital products, websites, and intelligent systems
              designed and developed by SkillYug Technologies.
            </p>
          </div>
        </section>

        <Section name="Work" index={0}>
          <CaseStudyCards />
        </Section>

        <Section name="What Clients Say" index={1}>
          <TestimonialCards />
        </Section>
      </div>
    </SiteShell>
  );
}
