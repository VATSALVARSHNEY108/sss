import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { InsightsCards } from "@/components/template-page";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights · SkillYug Technologies",
  description: "Technical perspectives, engineering breakdowns, and strategic insights on AI, cloud architecture, and business automation.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> INSIGHTS & ANALYSIS
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                Latest Insights
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                Technical perspectives, engineering breakdowns, and strategic insights on AI engineering, software architecture, and business automation.
              </p>
            </div>

            <div className="timeline-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "19px", color: "#ffffff", margin: "0 0 12px" }}>Stay in the Loop</h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 16px" }}>
                Get useful insights on AI engineering, software architecture, and business automation.
              </p>
              <div className="newsletter" style={{ background: "rgba(0,0,0,0.4)" }}>
                <input aria-label="Email address" placeholder="Enter your work email" style={{ padding: "8px 0" }} />
                <button aria-label="Subscribe" style={{ padding: "8px 12px" }}>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>Featured Articles</h2>
            <InsightsCards />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
