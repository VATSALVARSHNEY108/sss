import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/site-shell";
import TemplatePage from "@/components/template-page";
import { pages } from "@/lib/site-data";

const staticSlugs = ["home", "about", "services", "portfolio", "blog", "careers", "team", "contact"];

export function generateStaticParams() {
  return Object.keys(pages).filter((slug) => !staticSlugs.includes(slug)).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = pages[params.slug];
  return { title: page ? `${page.title} · SkillYug Technologies` : "SkillYug Technologies", description: page?.description || "A flexible website blueprint for an AI technology company." };
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];
  if (!page) notFound();
  return <SiteShell><TemplatePage data={page} /></SiteShell>;
}
