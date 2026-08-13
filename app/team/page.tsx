import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { Sparkles } from "lucide-react";
import TeamMemberCard from "@/backend/TeamMemberCard";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team · SkillYug Technologies",
  description: "Meet the engineers, AI researchers, and product strategists building intelligent software systems for global enterprises.",
};

export default function TeamPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Meet the engineers, AI researchers, and product strategists building intelligent software systems for global enterprises.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Leadership & Experts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              imgSrc={member.imgSrc}
              linkedin={member.linkedin}
              width={member.width}
              height={member.height}
              offsetX={member.offsetX}
              offsetY={member.offsetY}
            />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
