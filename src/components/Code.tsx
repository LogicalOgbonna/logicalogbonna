import { highlight, Pre, RawCode } from "codehike/code";
import { CopyButton } from "./CopyButton";

// Using a sophisticated dark theme that works beautifully with the site aesthetic
const theme = {
  name: "custom-theme",
  colors: {
    "editor.background": "#1c1917",
    "editor.foreground": "#e7e5e4",
    "editorLineNumber.foreground": "#57534e",
    "editorLineNumber.activeForeground": "#a8a29e",
  },
  tokenColors: [
    { scope: "comment", settings: { foreground: "#78716c", fontStyle: "italic" } },
    { scope: "string", settings: { foreground: "#86efac" } },
    { scope: "constant.numeric", settings: { foreground: "#fcd34d" } },
    { scope: "constant.language", settings: { foreground: "#f9a8d4" } },
    { scope: "keyword", settings: { foreground: "#c4b5fd" } },
    { scope: "keyword.control", settings: { foreground: "#c4b5fd" } },
    { scope: "keyword.operator", settings: { foreground: "#a8a29e" } },
    { scope: "storage", settings: { foreground: "#c4b5fd" } },
    { scope: "storage.type", settings: { foreground: "#67e8f9" } },
    { scope: "entity.name.function", settings: { foreground: "#93c5fd" } },
    { scope: "entity.name.class", settings: { foreground: "#fcd34d" } },
    { scope: "entity.name.type", settings: { foreground: "#67e8f9" } },
    { scope: "entity.other.attribute-name", settings: { foreground: "#c4b5fd" } },
    { scope: "support.function", settings: { foreground: "#93c5fd" } },
    { scope: "support.class", settings: { foreground: "#67e8f9" } },
    { scope: "support.type", settings: { foreground: "#67e8f9" } },
    { scope: "variable", settings: { foreground: "#e7e5e4" } },
    { scope: "variable.parameter", settings: { foreground: "#fdba74" } },
    { scope: "variable.other", settings: { foreground: "#e7e5e4" } },
    { scope: "punctuation", settings: { foreground: "#a8a29e" } },
    { scope: "meta.tag", settings: { foreground: "#f9a8d4" } },
    { scope: "entity.name.tag", settings: { foreground: "#f9a8d4" } },
  ],
};

interface CodeProps {
  codeblock: RawCode;
}

export async function Code({ codeblock }: CodeProps) {
  const highlighted = await highlight(codeblock, theme);
  const lang = codeblock.lang || "text";

  return (
    <figure className="code-block group relative my-6 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-[#1c1917] shadow-sm">
      {/* Header with language badge */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-stone-800 bg-[#1c1917]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-stone-700" />
            <span className="w-3 h-3 rounded-full bg-stone-700" />
            <span className="w-3 h-3 rounded-full bg-stone-700" />
          </div>
          <span className="ml-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
            {lang}
          </span>
        </div>
        <CopyButton code={highlighted.code} />
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <Pre
          code={highlighted}
          className="p-4 text-sm leading-relaxed font-mono"
          style={{
            backgroundColor: "transparent",
          }}
        />
      </div>
    </figure>
  );
}

export default Code;
