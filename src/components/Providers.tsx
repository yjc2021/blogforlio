"use client";

import { Provider } from "jotai";
import { type ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
