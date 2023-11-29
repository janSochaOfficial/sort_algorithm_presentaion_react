import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
}
