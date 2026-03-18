"use client";

import { createContext, use } from "react";

export const ThemeContext = createContext<string>("light");

export function ThemeProvider({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) {
  return <ThemeContext value={theme}>{children}</ThemeContext>;
}

export function ThemedHeading({ text }: { text: string }) {
  const theme = use(ThemeContext);
  return (
    <p data-theme={theme} className="text-sm font-medium">
      {text}
    </p>
  );
}
