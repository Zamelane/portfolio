import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { ChildrenProps } from '../types';
type ContactItemProps = ChildrenProps & {
  icon?: string;
  href?: string;
};

export function ContactItem({ icon, children, href }: ContactItemProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-3 px-3",
        href && "cursor-pointer hover:text-slate-50 transition-colors delay-150"
      )}
      whileHover={href ? { x: 3 } : {}}
    >
      <i
        className={
          icon ? icon : href ? "ri-external-link-line" : "ri-question-line"
        }
      />
      {href ? <Link href={href}>{children}</Link> : <span>{children}</span>}
    </motion.div>
  );
}
