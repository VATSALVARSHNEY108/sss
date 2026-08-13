import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { Sparkles } from "lucide-react";
import { ContactForm } from "@/components/template-page";

export const metadata: Metadata = {
  title: "Careers · SkillYug Technologies",
  description: "Build cutting-edge AI products and high-impact enterprise software alongside a passionate team of innovators.",
};

export default function CareersPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> GROW YOUR CAREER
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff", textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)" }}>
                Join SkillYug
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                Build cutting-edge AI products and high-impact enterprise software alongside a passionate team of innovators.
              </p>
            </div>

            <div className="timeline-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "19px", color: "#ffffff", margin: "0 0 12px" }}>Why Work With Us?</h3>
              <ul style={{ paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Work on cutting-edge AI and agentic software.</li>
                <li>Flexible remote options & competitive compensation.</li>
                <li>Continuous learning stipend & high autonomy.</li>
                <li>Collaborative, engineering-first culture.</li>
              </ul>
            </div>
          </div>

          <div className="column-content">
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>Open Positions</h2>
              <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
                <article className="template-card" style={{ minHeight: "auto", padding: "28px" }}>
                  <div className="card-number">ENGINEERING</div>
                  <h3 style={{ margin: "12px 0 8px", fontSize: "20px" }}>Senior AI Platform Engineer</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8" }}>Remote / Full-time. Python, PyTorch, Kubernetes, Vector Databases.</p>
                </article>
                <article className="template-card" style={{ minHeight: "auto", padding: "28px" }}>
                  <div className="card-number">ENGINEERING</div>
                  <h3 style={{ margin: "12px 0 8px", fontSize: "20px" }}>Full Stack Developer (Next.js & Node)</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8" }}>Remote / Full-time. React, TypeScript, serverless backend, GraphQL.</p>
                </article>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "20px 0 16px" }}>Submit Application</h2>
              <ContactForm apply={true} />
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
