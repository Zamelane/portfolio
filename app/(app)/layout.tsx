'use client'

import { Footer } from "@/src/components/blocks/footer";
import { Header } from "@/src/components/blocks/header";
import { Menu, MenuContext } from "@/src/components/blocks/menu";
import { ChildrenProps } from "@/src/types";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: ChildrenProps) {
  const menu = useContext(MenuContext);

  return (
    <div className="flex justify-center items-center w-full h-screen p-0 sm:p-2 lg:p-10 bg-theme-backdrop">
      <div className="flex flex-col w-full h-full bg-theme-background sm:border border-solid border-theme-stroke sm:rounded-lg box-border overflow-hidden">
        <Header />

        <AnimatePresence>
          {!menu.value && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 'h-full' }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.3 }
              }}
              exit={{ opacity: 0, height: 0 }}
              className="h-full overflow-y-auto"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <Menu />
        <Footer />
      </div>
    </div>
  );
}