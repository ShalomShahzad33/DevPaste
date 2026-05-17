import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
};

const CodeHighlighter = ({ code, language = "javascript" }: Props) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "16px",
          background: "#0f172b", // slate-950-ish
          fontSize: "14px",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
