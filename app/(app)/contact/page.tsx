"use client";

import { cn } from "@/src/lib/utils";
import { ChildrenProps } from "@/src/types";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabLayout } from "@/src/components/blocks/tab";
import { TextInput } from "@/src/components/input";
import { Button } from "@/src/components/button";
import {
  CodeConst,
  CodeFunctionExecute,
  CodeLine,
  CodeOperator,
  CodeStringValue,
  CodeVarName,
} from "@/src/components/code";
import { useMediaQuery } from "react-responsive";

export default function AboutPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="h-full flex flex-row flex-nowrap not-md:flex-col md:overflow-hidden">
      <div className="text-heading-foreground text-sm p-6 md:hidden">
        _contact-me
      </div>
      <div className="h-full flex flex-col border-r border-r-theme-stroke min-w-[244px] max-w-min not-md:max-w-full not-md:border-r-0 not-md:h-max not-md:gap-1">
        <Spoiler
          title="contacts"
          className="not-md:bg-slate-700"
          childrenLayoutClassName="not-md:border-0 not-md:-mb-1"
        >
          <ContactItem icon="ri-mail-fill">zamelane@vk.com</ContactItem>
          <ContactItem icon="ri-phone-fill">+79539266829</ContactItem>
        </Spoiler>
        <Spoiler
          title="find-me-also-in"
          className="not-md:bg-slate-700"
          childrenLayoutClassName="not-md:border-0 not-md:-mb-1"
        >
          <ContactItem href="https://123.ru">Discord</ContactItem>
        </Spoiler>
      </div>
      <div className="w-full">
        <TabLayout className="not-md:hidden" />
        <div className="h-full flex flex-row">

          <div className="p-10 w-4/9 inline-flex pt-32 justify-center not-2xl:w-full not-md:p-6">
            <div className="flex flex-col gap-6 min-w-[372px] not-md:min-w-full">
              <TextInput label="_name:" changeValue={v => setName(v)} />
              <TextInput label="_email:" changeValue={v => setEmail(v)} />
              <TextInput label="_message:" changeValue={v => setMessage(v)} inputType="textarea" />
              <Button className="self-start" disabled>submit-message</Button>
            </div>
          </div>

          <div className="inline-flex w-5/9 not-2xl:hidden">
            <div className="w-full border-l-2 border-r border-theme-stroke px-7 py-3">
              <CodeLine lineNumber={1} lineSymbols={2}>
                <CodeConst />
                <CodeVarName>button</CodeVarName>
                <CodeOperator>=</CodeOperator>
                <div className="inline-flex">
                  <CodeOperator>document</CodeOperator>.
                  <CodeOperator>querySelector</CodeOperator>(
                  <CodeStringValue quotationMark="'">#sendBtn</CodeStringValue>)
                </div>
              </CodeLine>
              <CodeLine lineNumber={2} lineSymbols={2} />
              <CodeLine lineNumber={3} lineSymbols={2}>
                <CodeConst />
                <CodeVarName>message</CodeVarName>
                <CodeOperator>=</CodeOperator> {"{"}
              </CodeLine>
              <CodeLine lineNumber={4} lineSymbols={2}>
                <p />
                <div className="inline-flex">
                  <CodeVarName>name</CodeVarName>:
                </div>
                <div className="inline-flex">
                  <CodeStringValue quotationMark={'"'}>{name}</CodeStringValue>
                </div>
              </CodeLine>
              <CodeLine lineNumber={5} lineSymbols={2}>
                <p />
                <div className="inline-flex">
                  <CodeVarName>email</CodeVarName>:
                </div>
                <div className="inline-flex">
                  <CodeStringValue quotationMark={'"'}>{email}</CodeStringValue>
                </div>
              </CodeLine>
              <CodeLine lineNumber={6} lineSymbols={2}>
                <p />
                <div className="inline-flex">
                  <CodeVarName>message</CodeVarName>:
                </div>
                <div className="inline-flex">
                  <CodeStringValue quotationMark={'"'}>{message}</CodeStringValue>
                </div>
              </CodeLine>
              <CodeLine lineNumber={7} lineSymbols={2}>
                <p />
                <div className="inline-flex">
                  <CodeVarName>date</CodeVarName>:
                </div>
                <div className="inline-flex">
                  <CodeStringValue quotationMark={'"'}>123</CodeStringValue>
                </div>
              </CodeLine>
              <CodeLine lineNumber={8} lineSymbols={2}>
                {"}"}
              </CodeLine>
              <CodeLine lineNumber={9} lineSymbols={2} />
              <CodeLine lineNumber={10} lineSymbols={2}>
                <div className="inline-flex">
                  <CodeVarName>button</CodeVarName>
                  .
                  <CodeFunctionExecute>addEventListener</CodeFunctionExecute>
                  {"("}
                  <CodeStringValue quotationMark="'">click</CodeStringValue>
                  ,
                  () <CodeOperator>{"=>"}</CodeOperator> {" {"}
                </div>
              </CodeLine>
              <CodeLine lineNumber={11} lineSymbols={2}>
                <p />
                <div className="inline-flex">
                  <CodeVarName>form</CodeVarName>
                  .
                  <CodeFunctionExecute>send</CodeFunctionExecute>
                  (<CodeVarName>message</CodeVarName>);
                </div>
              </CodeLine>
              <CodeLine lineNumber={12} lineSymbols={2}>
                {"})"}
              </CodeLine>
            </div>

            <div className="px-2 py-3">
              <div className="w-6 h-1.5 bg-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type SpoilerProps = ChildrenProps & {
  isOpenDefault?: boolean;
  isMobileOpenDefault?: boolean;
  title: string;
  className?: string;
  childrenLayoutClassName?: string;
};

function Spoiler({ title, isOpenDefault = true, isMobileOpenDefault = false, children, className, childrenLayoutClassName }: SpoilerProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(isMobile ? isMobileOpenDefault : isOpenDefault);

  return (
    <div className="flex flex-col">
      <motion.p
        className={cn(
          "inline-flex gap-3 px-6 py-3 max-h-12 border-b border-b-theme-stroke text-slate-50 cursor-pointer select-none",
          className
        )}
        onClick={() => setIsOpen((v) => !v)}
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

type ContactItemProps = ChildrenProps & {
  icon?: string;
  href?: string;
};

function ContactItem({ icon, children, href }: ContactItemProps) {
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
