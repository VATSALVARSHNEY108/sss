"use client";

import * as React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

const TRANSITION = { type: "spring" as const, bounce: 0.05, duration: 0.3 };

interface PopoverContextValue {
  isOpen: boolean;
  openPopover: () => void;
  closePopover: () => void;
  uniqueId: string;
  note: string;
  setNote: (note: string) => void;
}

const PopoverContext = React.createContext<PopoverContextValue | undefined>(undefined);

function usePopover() {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("Popover components must be used inside PopoverRoot");
  return context;
}

interface PopoverRootProps { children: React.ReactNode; className?: string; onOpenChange?: (open: boolean) => void; }

const PopoverRoot = React.forwardRef<HTMLDivElement, PopoverRootProps>(({ children, className, onOpenChange }, ref) => {
  const uniqueId = React.useId();
  const [isOpen, setIsOpen] = React.useState(false);
  const [note, setNote] = React.useState("");
  const value = React.useMemo(() => ({
    isOpen,
    openPopover: () => { setIsOpen(true); onOpenChange?.(true); },
    closePopover: () => { setIsOpen(false); setNote(""); onOpenChange?.(false); },
    uniqueId,
    note,
    setNote,
  }), [isOpen, note, onOpenChange, uniqueId]);

  return (
    <PopoverContext.Provider value={value}>
      <MotionConfig transition={TRANSITION}>
        <div ref={ref} className={cn("relative isolate flex items-center justify-center", className)}>{children}</div>
      </MotionConfig>
    </PopoverContext.Provider>
  );
});
PopoverRoot.displayName = "PopoverRoot";

interface PopoverTriggerProps extends Omit<ButtonProps, "children"> { children: React.ReactNode; }

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(({ children, className, variant = "outline", ...props }, ref) => {
  const { openPopover, uniqueId } = usePopover();
  return (
    <motion.div layoutId={`popover-${uniqueId}`}>
      <Button ref={ref} variant={variant} className={className} onClick={openPopover} {...props}>
        <motion.span layoutId={`popover-label-${uniqueId}`} className="text-sm">{children}</motion.span>
      </Button>
    </motion.div>
  );
});
PopoverTrigger.displayName = "PopoverTrigger";

const PopoverOpenArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ onClick, ...props }, ref) => {
  const { openPopover } = usePopover();
  return <div ref={ref} {...props} onClick={(event) => { onClick?.(event); openPopover(); }} />;
});
PopoverOpenArea.displayName = "PopoverOpenArea";

interface PopoverContentProps { children: React.ReactNode; className?: string; }

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(({ children, className }, ref) => {
  const { isOpen, closePopover, uniqueId } = usePopover();
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) closePopover();
    };
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closePopover(); };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopover, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div ref={(node) => { contentRef.current = node; if (typeof ref === "function") ref(node); else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node; }} layoutId={`popover-${uniqueId}`} initial={{ opacity: 0, scale: 0.94, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 10 }} className={cn("absolute z-50 overflow-hidden rounded-2xl border border-blue-400/30 bg-neutral-950/95 text-white shadow-2xl shadow-blue-950/40 outline-none backdrop-blur-xl", className)}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
PopoverContent.displayName = "PopoverContent";

const PopoverForm = React.forwardRef<HTMLFormElement, { children: React.ReactNode; onSubmit?: (note: string) => void; className?: string }>(({ children, onSubmit, className }, ref) => {
  const { note, closePopover } = usePopover();
  return <form ref={ref} className={cn("flex h-full flex-col", className)} onSubmit={(event) => { event.preventDefault(); onSubmit?.(note); closePopover(); }}>{children}</form>;
});
PopoverForm.displayName = "PopoverForm";

const PopoverLabel = React.forwardRef<HTMLSpanElement, { children: React.ReactNode; className?: string }>(({ children, className }, ref) => <motion.span ref={ref} aria-hidden="true" className={cn("absolute left-4 top-3 select-none text-sm text-neutral-400", className)}>{children}</motion.span>);
PopoverLabel.displayName = "PopoverLabel";

const PopoverTextarea = React.forwardRef<HTMLTextAreaElement, { className?: string; id?: string }>(({ className, id }, ref) => {
  const { note, setNote } = usePopover();
  return <textarea ref={ref} id={id} autoFocus value={note} onChange={(event) => setNote(event.target.value)} className={cn("h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none placeholder:text-neutral-500", className)} />;
});
PopoverTextarea.displayName = "PopoverTextarea";

const PopoverFooter = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(({ children, className }, ref) => <div ref={ref} className={cn("flex items-center justify-between border-t border-white/10 bg-white/5 px-4 py-3", className)}>{children}</div>);
PopoverFooter.displayName = "PopoverFooter";

const PopoverCloseButton = React.forwardRef<HTMLButtonElement, { className?: string }>(({ className }, ref) => { const { closePopover } = usePopover(); return <Button ref={ref} type="button" variant="ghost" size="icon" className={cn("h-8 w-8", className)} onClick={closePopover} aria-label="Close popover"><X className="h-4 w-4" /></Button>; });
PopoverCloseButton.displayName = "PopoverCloseButton";

const PopoverSubmitButton = React.forwardRef<HTMLButtonElement, { children?: React.ReactNode; className?: string; variant?: ButtonProps["variant"] }>(({ children = "Submit", ...props }, ref) => <Button ref={ref} type="submit" size="sm" {...props}>{children}</Button>);
PopoverSubmitButton.displayName = "PopoverSubmitButton";

export { PopoverRoot, PopoverTrigger, PopoverOpenArea, PopoverContent, PopoverForm, PopoverLabel, PopoverTextarea, PopoverFooter, PopoverCloseButton, PopoverSubmitButton };
