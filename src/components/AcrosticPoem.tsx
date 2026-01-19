import React from "react";

interface AcrosticPoemProps {
  children: React.ReactNode;
}

export function AcrosticPoem({ children }: AcrosticPoemProps) {
  return (
    <div className="acrostic-poem font-serif text-lg md:text-xl leading-relaxed text-stone-700 dark:text-stone-300 space-y-6">
      {children}
    </div>
  );
}

/**
 * Poem paragraph - each stanza with proper spacing
 */
export function PoemParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="whitespace-pre-line">{children}</p>
  );
}

/**
 * Highlight component for marking acrostic text
 * Renders text in golden/amber color
 */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-amber-500 dark:text-amber-400 font-semibold">
      {children}
    </span>
  );
}

export default AcrosticPoem;
