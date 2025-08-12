import { useMediaQuery } from "react-responsive";
import { ChildrenOptionalProps } from "../types";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "../lib/utils";

type SpoilerProps = ChildrenOptionalProps & {
  isOpenDefault?: boolean;
  isMobileOpenDefault?: boolean;
  title: string;
  className?: string;
  childrenLayoutClassName?: string;
};

export function Spoiler({ title, isOpenDefault = true, isMobileOpenDefault = false, children, className, childrenLayoutClassName }: SpoilerProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isDesktopOpen, setIsDesktopOpen] = useState(isOpenDefault);
  const [isMobileOpen, setIsMobileOpen] = useState(isMobileOpenDefault);

  const isOpen = isMobile ? isMobileOpen : isDesktopOpen;
  const setReverseOpen = () => {
    if (isMobile) {
      setIsMobileOpen(isOpen => !isOpen);
    } else {
      setIsDesktopOpen(isOpen => !isOpen);
    }
  }

  return (
    <div className="flex flex-col">
      <motion.p
        className={cn(
          "inline-flex gap-3 px-6 py-3 max-h-12 border-b border-b-theme-stroke text-slate-50 cursor-pointer select-none",
          className
        )}
        onClick={setReverseOpen}
        whileTap={{ scale: 0.98 }}
      >
        <motion.i
          className="ri-arrow-down-s-fill"
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        />
        <span>{title}</span>
      </motion.p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.1 },
              },
            }}
            className={cn(
              "p-3 flex flex-col gap-2 border-b border-b-theme-stroke overflow-hidden",
              childrenLayoutClassName
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}