"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { coreServices } from "@/lib/core-services";

interface ServicesModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ServicesModal({ open, onClose }: ServicesModalProps) {
  const router = useRouter();

  const goToService = (slug: string) => {
    onClose();
    router.push(`/${slug}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="services-modal__backdrop"
            aria-label="Close services menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            className="services-modal"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="services-modal__header">
              <div>
                <p className="services-modal__eyebrow">
                  <Sparkles size={13} /> SERVICE PORTFOLIO
                </p>
                <h2 id="services-modal-title">What we build for you</h2>
                <p className="services-modal__subtitle">
                  Pick a capability to explore — or start a conversation about your project.
                </p>
              </div>
              <button
                type="button"
                className="services-modal__close"
                aria-label="Close"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>

            <ul className="services-modal__list">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={service.slug}>
                    <button
                      type="button"
                      className="services-modal__item"
                      onClick={() => goToService(service.slug)}
                    >
                      <span className="services-modal__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="services-modal__icon" aria-hidden="true">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="services-modal__body">
                        <span className="services-modal__title">{service.title}</span>
                        <span className="services-modal__desc">{service.description}</span>
                        <span className="services-modal__tags">
                          {service.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </span>
                      </span>
                      <ArrowUpRight size={18} className="services-modal__arrow" />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="services-modal__footer">
              <p>Not sure where to start? We&apos;ll help you choose the right engagement.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
                onClick={onClose}
              >
                Discuss Your Project <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
