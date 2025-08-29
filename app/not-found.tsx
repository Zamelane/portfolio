import { CodeConst, CodeFunctionExecute, CodeLine, CodeOperator, CodeStringValue, CodeVarName } from "@/src/components/code";
import Layout from "./(app)/layout";
import { Metadata } from "next";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `${config.name} ${config.surname} | Not Found`,
  description: `The NotFound page of the website is a portfolio owned by ${config.name} ${config.surname}`,
};

export default function NotFound() {
  const pageNotFoundStringValueBlock = (
    <CodeStringValue>404: PageNotFoundError 😢</CodeStringValue>
  )
  return (
    <Layout>
      <div className="h-full p-6 flex justify-center items-center not-sm:justify-start">
        <div className="flex flex-row justify-center gap-36 not-xl:flex-col not-xl:gap-10">

          <div className="whitespace-pre">
            <p>{"██╗  ██╗ ██████╗ ██╗  ██╗"}</p>
            <p>{"██║  ██║██╔═████╗██║  ██║"}</p>
            <p>{"███████║██║██╔██║███████║"}</p>
            <p>{"╚════██║████╔╝██║╚════██║"}</p>
            <p>{"     ██║╚██████╔╝     ██║"}</p>
            <p>{"     ╚═╝ ╚═════╝      ╚═╝"}</p>
          </div>

          <div className="not-xl:hidden">
            <CodeLine lineNumber={1} lineSymbols={2}>
              <CodeConst /> <CodeVarName>page</CodeVarName>
              <CodeOperator>=</CodeOperator>
              <span className="flex">
                <CodeFunctionExecute>findPage</CodeFunctionExecute>
                (<CodeStringValue quotationMark="'">you-were-looking-for</CodeStringValue>);
              </span>
            </CodeLine>
            <CodeLine lineNumber={2} lineSymbols={2} />
            <CodeLine lineNumber={3} lineSymbols={2}>
              <CodeOperator>if</CodeOperator>
              <div className="inline-flex">(!<CodeVarName>page</CodeVarName>)</div> {"{"}
            </CodeLine>
            <CodeLine lineNumber={4} lineSymbols={2}>
              <p className="whitespace-pre">{" "}</p>
              <div className="inline-flex">
                <CodeFunctionExecute>console</CodeFunctionExecute>
                .
                <CodeFunctionExecute>log</CodeFunctionExecute>
                (<CodeStringValue>Oops! Looks like you took a wrong turn in the codebase.</CodeStringValue>);
              </div>
            </CodeLine>
            <CodeLine lineNumber={5} lineSymbols={2}>
              <p className="whitespace-pre">{" "}</p>
              <div className="inline-flex">
                <CodeFunctionExecute>console</CodeFunctionExecute>
                .
                <CodeFunctionExecute>log</CodeFunctionExecute>
                (<CodeStringValue>{"But hey, since you're here..."}</CodeStringValue>);
              </div>
            </CodeLine>
            <CodeLine lineNumber={6} lineSymbols={2}>
              <p className="whitespace-pre">{" "}</p>
              <div className="inline-flex">
                <CodeFunctionExecute>console</CodeFunctionExecute>
                .
                <CodeFunctionExecute>log</CodeFunctionExecute>
                (<CodeStringValue>🔍 Go back to the homepage and explore more cool stuff!</CodeStringValue>);
              </div>
            </CodeLine>
            <CodeLine lineNumber={7} lineSymbols={2}>
              <p className="whitespace-pre">{" "}</p>
              <CodeOperator>throw new</CodeOperator>
              <div className="inline-flex">
                <CodeFunctionExecute>Error</CodeFunctionExecute>
                (<CodeStringValue>404: PageNotFoundError 😢</CodeStringValue>);
              </div>
            </CodeLine>
            <CodeLine lineNumber={8} lineSymbols={2}>
              {"}"}
            </CodeLine>
            <CodeLine lineNumber={9} lineSymbols={2} />
            <CodeLine lineNumber={10} lineSymbols={2}>
              {"/* Suggestions:"}
            </CodeLine>
            <CodeLine lineNumber={11} lineSymbols={2}>
              {" * - Check the URL for typos"}
            </CodeLine>
            <CodeLine lineNumber={12} lineSymbols={2}>
              {" * - Use the site navigation"}
            </CodeLine>
            <CodeLine lineNumber={13} lineSymbols={2}>
              {" * - Or hit CMD+Z in real life 😅"}
            </CodeLine>
            <CodeLine lineNumber={14} lineSymbols={2}>
              {" */"}
            </CodeLine>
            <CodeLine lineNumber={15} lineSymbols={2} />
            <CodeLine lineNumber={16} lineSymbols={2}>
              <span className="inline-flex">
                <CodeFunctionExecute>redirect</CodeFunctionExecute>
                (<CodeStringValue quotationMark="'">home</CodeStringValue>);
              </span>
            </CodeLine>
          </div>

          <div className="xl:hidden">
            <CodeLine>
              <CodeOperator>throw new</CodeOperator>
              <span className="inline-flex">
                <CodeFunctionExecute>Error</CodeFunctionExecute>{'('}
                <span className="inline-flex not-md:hidden">
                  <CodeStringValue>404: PageNotFoundError 😢</CodeStringValue>
                  {');'}
                </span>
              </span>
            </CodeLine>
            <div className="md:hidden">
              <CodeLine>
                {pageNotFoundStringValueBlock}
              </CodeLine>
              <CodeLine>
                {');'}
              </CodeLine>
            </div>
            <CodeLine>
              <p> </p>
            </CodeLine>
            <CodeLine>
              <span className="inline-flex">
                <CodeFunctionExecute>goBack</CodeFunctionExecute>()
              </span>
              ||
              <span className="inline-flex">
                <CodeFunctionExecute>goHome</CodeFunctionExecute>();
              </span>
            </CodeLine>
          </div>
        </div>
      </div>
    </Layout>
  )
}