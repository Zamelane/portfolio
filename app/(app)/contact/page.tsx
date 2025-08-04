"use client";

import { cn } from "@/src/lib/utils";
import { ChildrenProps } from "@/src/types";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col border-r border-r-theme-stroke w-[244px]">
        <Spoiler title="contacts">
          <ContactItem icon="ri-mail-fill">zamelane@vk.com</ContactItem>
          <ContactItem icon="ri-phone-fill">+79539266829</ContactItem>
        </Spoiler>
        <Spoiler title="find-me-also-in">
          <ContactItem href="https://123.ru">Discord</ContactItem>
        </Spoiler>
      </div>
      <div></div>
    </div>
  );
}

type SpoilerProps = ChildrenProps & {
  isOpenDefault?: false;
  title: string;
};
function Spoiler({ title, isOpenDefault, children }: SpoilerProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault || true);
  return (
    <div className="flex flex-col">
      <p
        className="inline-flex gap-3 px-6 py-3 border-b border-b-theme-stroke text-slate-50 cursor-pointer select-none"
        onClick={() => setIsOpen(v => !v)}
      >
        <i className="ri-arrow-down-s-fill" />
        <span>{title}</span>
      </p>
      {isOpen && (
        <div className="flex flex-col gap-2 border-b border-b-theme-stroke p-3">
          {children}
        </div>
      )}
    </div>
  );
}

type ContactItemProps = ChildrenProps & {
  icon?: string;
  href?: string;
};
function ContactItem({ icon, children, href }: ContactItemProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-3",
        href && "cursor-pointer hover:text-slate-50 transition-colors delay-150"
      )}
    >
      <i
        className={
          icon ? icon : href ? "ri-external-link-line" : "ri-question-line"
        }
      />
      {href ? <Link href={href}>{children}</Link> : <span>{children}</span>}
    </div>
  );
}
