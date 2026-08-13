"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ServicesModal from "@/components/services-modal";

type ServicesModalContextValue = {
  isOpen: boolean;
  openServices: () => void;
  closeServices: () => void;
};

const ServicesModalContext = createContext<ServicesModalContextValue | null>(null);

export function useServicesModal() {
  const ctx = useContext(ServicesModalContext);
  if (!ctx) {
    throw new Error("useServicesModal must be used within ServicesModalProvider");
  }
  return ctx;
}

export function ServicesModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const openServices = useCallback(() => setIsOpen(true), []);

  const closeServices = useCallback(() => {
    setIsOpen(false);
    if (pathname === "/services") {
      router.replace("/");
    }
    if (searchParams.get("services") === "open") {
      router.replace(pathname === "/services" ? "/" : pathname);
    }
  }, [pathname, router, searchParams]);

  useEffect(() => {
    if (searchParams.get("services") === "open" || pathname === "/services") {
      setIsOpen(true);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeServices();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeServices]);

  const value = useMemo(
    () => ({ isOpen, openServices, closeServices }),
    [isOpen, openServices, closeServices],
  );

  return (
    <ServicesModalContext.Provider value={value}>
      {children}
      <ServicesModal open={isOpen} onClose={closeServices} />
    </ServicesModalContext.Provider>
  );
}
