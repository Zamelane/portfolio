"use client";

import { useState } from "react";
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
import { Spoiler } from "@/src/components/spoiler";
import { ContactItem } from "@/src/components/contactItem";

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