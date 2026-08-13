import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

export const metadata: Metadata = {
  title: "SkillYug Technologies | AI Solutions, Software Development & Business Automation",
  description: "SkillYug Technologies builds AI-powered products, enterprise software, SaaS platforms, intelligent automation systems, and scalable digital solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
