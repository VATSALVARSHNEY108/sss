"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BB8Toggle from "@/components/ui/star-wars-toggle-switch";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface SiteNavbarProps {
  isLight: boolean;
  onToggleTheme: () => void;
}

export default function SiteNavbar({ isLight, onToggleTheme }: SiteNavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn("site-navbar", scrolled && "site-navbar--scrolled")}
    >
      <div className="site-navbar__inner">
        <Link href="/" className="site-navbar__brand" aria-label="SkillYug home">
          <img
            src={isLight ? "/skillyug-logo2.png" : "/skillyug-logo.png"}
            alt="SkillYug Technologies"
          />
        </Link>

        <nav className="site-navbar__nav" aria-label="Main navigation">
          <div className="site-navbar__pill">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn("site-navbar__link", isActive && "is-active")}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-lamp"
                      className="site-navbar__lamp"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="site-navbar__link-text">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="site-navbar__actions">
          <button
            type="button"
            className="site-navbar__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="site-navbar__toggle">
            <BB8Toggle isLight={isLight} onToggle={onToggleTheme} />
          </div>
          <a
            className="site-navbar__cta"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="site-navbar__backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="site-navbar__mobile"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(isActive && "is-active")}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                className="site-navbar__mobile-cta"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Start Your Project
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
