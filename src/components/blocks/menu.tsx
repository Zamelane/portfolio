'use client'

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { createContext, SetStateAction, useContext } from "react";
import { MENU } from "./header";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

export function Menu() {
  const menu = useContext(MenuContext);
  
  return (
    <AnimatePresence>
      {menu.value && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mb-auto"
        >
          <div className={cn("flex flex-col pt-3")}>
            <MenuItem name="# navigate:" delay={1} />
            {MENU.center.map((e, i) => (
              <MenuItem key={i} delay={i + 1} {...e} />
            ))}
            {MENU.right.map((e, i) => (
              <MenuItem key={i} delay={i + 1 + MENU.center.length} {...e} />
            ))}
            <div className="border-b border-solid border-theme-stroke"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type MenuItemProps = {
  name: string;
  url?: string;
  delay: number;
};

export function MenuItem({ name, url, delay }: MenuItemProps) {
  const className = "py-3 px-6 flex items-center";
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: () => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: delay * 0.15,
        duration: 0.3,
        ease: "easeOut" as const
      }
    })
  };

  if (url) {
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={MENU.center.findIndex(item => item.url === url) || 0}
      >
        <Link 
          href={url} 
          className={cn(className, "text-heading-foreground border-t border-solid border-theme-stroke")}
        >
          <p>{name}</p>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={0} // Для элементов без URL
    >
      <div className={className}>
        <p>{name}</p>
      </div>
    </motion.div>
  );
}

export function MenuButton() {
  const { value, setValue } = useContext(MenuContext);
  
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Hamburger 
        distance="md" 
        size={24} 
        color="#62748E" 
        toggled={value} 
        toggle={setValue}
      />
    </motion.div>
  );
}

export const MenuContext = createContext({
  value: false,
  setValue: (v: SetStateAction<boolean>) => { console.log(v) }
});