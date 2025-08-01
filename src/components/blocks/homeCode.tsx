import { CodeBlock, CodeConst, CodeFunction, CodeFunctionExecute, CodeFunctionType, CodeLine, CodeOperator, CodeType, CodeVarName } from "@/src/components/code";

export function HomeCode({ className }: { className?: string }) {
  return (
    <CodeBlock className={className}>
      <CodeLine>
        <CodeFunction />
        initializeModuleChunk
        <div className="flex">
          <CodeOperator>{'<'}</CodeOperator>
          <CodeFunctionType>T</CodeFunctionType>
          <CodeOperator>{'>'}</CodeOperator>
        </div>
        (chunk: ResolveModelChunk): <CodeFunctionType>T</CodeFunctionType> {'{'}
      </CodeLine>
      <CodeLine className="pl-5">
        <CodeConst />
        <div className="flex"><CodeVarName>value</CodeVarName>:</div>
        <CodeType>T</CodeType>
        <CodeOperator>=</CodeOperator>
        <div className="flex">
          <CodeFunctionExecute>parseModel</CodeFunctionExecute>
          (chunk.<CodeOperator>_response</CodeOperator>, chunk.<CodeOperator>_value</CodeOperator>);
        </div>
      </CodeLine>
      <CodeLine className="pl-5">
        <CodeConst />
        <div className="flex"><CodeVarName>initializedChunk</CodeVarName>:</div>
        <div className="flex">
          <CodeType>InitializedChunk</CodeType>
          <CodeOperator>{'<'}</CodeOperator>
          <CodeType>T</CodeType>
          <CodeOperator>{'>'}</CodeOperator>
        </div>
        <CodeOperator>=</CodeOperator>
        (chunk: any);
      </CodeLine>
      <CodeLine className="pl-5">
        <div className="flex">initializedChunk.<CodeOperator>_status</CodeOperator></div>
        <CodeOperator>=</CodeOperator> <CodeType>INITIALIZED</CodeType>;
      </CodeLine>
      <CodeLine className="pl-5">
        <div className="flex">
          initializedChunk.<CodeOperator>_value</CodeOperator>
        </div>
        <CodeOperator>=</CodeOperator> <CodeVarName>value</CodeVarName>;
      </CodeLine>
      <CodeLine className="pl-5">
        <CodeFunction>return</CodeFunction>
        value;
      </CodeLine>
      <CodeLine>{'}'}</CodeLine>
    </CodeBlock>
  )
}