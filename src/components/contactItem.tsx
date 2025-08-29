import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { ChildrenProps } from '../types';
import { toast } from 'sonner';
import { ClipboardCopyIcon } from 'lucide-react';
type ContactItemProps = ChildrenProps & {
  icon?: string;
  href?: string;
};

export function ContactItem({ icon, children, href }: ContactItemProps) {
  const spanClickHandler = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children)
      toast.info(
        'Copied!',
        {
          description: children,
          duration: 1500,
          icon: <ClipboardCopyIcon size={20}/>
        }
      )
    }
  }

  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-3 px-3",
        "cursor-pointer select-none hover:text-slate-50 transition-colors delay-150",
      )}
      whileHover={href || typeof children === 'string' ? { x: 3 } : {}}
    >
      <i
        className={
          icon ? icon : href ? "ri-external-link-line" : "ri-question-line"
        }
      />
      {
        href
          ? <Link href={href}>{children}</Link>
          : <span onClick={spanClickHandler}>{children}</span>
      }
    </motion.div>
  );
}
