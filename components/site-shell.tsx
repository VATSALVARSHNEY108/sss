"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import KineticGrid from "@/components/ui/kinetic-grid";
import SiteNavbar from "@/components/site-navbar";
import { WhobeeFloatingChat } from "@/components/whobee-floating-chat";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const light = window.localStorage.getItem("kinetic-theme") === "light";
    setIsLight(light);
    document.documentElement.classList.toggle("light", light);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    window.localStorage.setItem("kinetic-theme", next ? "light" : "dark");
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <KineticGrid isLight={isLight}>
      <SiteNavbar isLight={isLight} onToggleTheme={toggleTheme} />
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <div className="brand">
            <span className="brand-mark" />SkillYug <span className="brand-muted">Technologies</span>
          </div>
          <p>Building intelligent software that empowers businesses through AI, automation, and modern technology.</p>
        </div>
        <div>
          <p className="footer-label">Quick Links</p>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/team">Team</Link>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/about">About Us</Link>
          <Link href="/portfolio">Work</Link>
          <Link href="/team">Team</Link>
        </div>
        <div className="footer-newsletter">
          <p className="footer-label">Stay in the loop</p>
          <p>Get useful insights on AI engineering, software architecture, and business automation.</p>
          <div className="newsletter">
            <input aria-label="Email address" placeholder="Enter your work email" />
            <button aria-label="Subscribe">
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SkillYug Technologies. All Rights Reserved.</span>
          <span>LinkedIn · GitHub · X / Twitter</span>
          <span>Privacy Policy · Terms of Service · Cookie Policy</span>
        </div>
        {/* WhatsApp floating button */}
        <a
          href="https://api.whatsapp.com/send/?phone=919450935939&text=Hello%2C+I+am+interested+in+your+services&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          style={{
            position: 'fixed',
            left: '24px',
            bottom: '24px',
            zIndex: 999998,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25d366 0%, #128c5e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 32px rgba(37,211,102,0.55)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(37,211,102,0.4)';
          }}
        >
          {/* Pulse ring */}
          <span style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'rgba(37,211,102,0.3)',
            animation: 'whatsapp-pulse 2s ease-out infinite',
          }} />
          {/* Official WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.63 4.64 1.826 6.653L2.667 29.333l6.88-1.8A13.3 13.3 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.08 0-4.12-.56-5.893-1.627l-.42-.253-4.08 1.067 1.093-3.973-.28-.44A10.637 10.637 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16 26.667zm5.853-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.187.213-.36.24-.68.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.133.32-.347.48-.52.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.267-.627-.533-.533-.72-.547-.187-.013-.4-.013-.613-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.52 1.827.667.76.24 1.453.2 2 .12.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>
          <style>{`
            @keyframes whatsapp-pulse {
              0% { transform: scale(1); opacity: 0.7; }
              70% { transform: scale(1.4); opacity: 0; }
              100% { transform: scale(1.4); opacity: 0; }
            }
          `}</style>
        </a>
      </footer>

      {/* Floating Whobee AI Chat Circle Button on every page */}
      <WhobeeFloatingChat />
    </KineticGrid>
  );
}
