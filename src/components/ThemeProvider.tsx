"use client";

import React, { type ReactNode } from "react";
import { useAtomValue } from "jotai";
import { pageThemeAtom } from "@/atoms/pageTheme";

interface Props {
  children: ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  const pageTheme = useAtomValue(pageThemeAtom);

  return <div className={`${pageTheme} h-full w-full bg-background`}>{children}</div>;
};

export default ThemeProvider;
