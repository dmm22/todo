import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import codeExample1 from "../code/codeExample1"

export default function Code() {
  return (
    <SyntaxHighlighter language="typescript" style={atomOneDark}>
      {codeExample1}
    </SyntaxHighlighter>
  )
}
