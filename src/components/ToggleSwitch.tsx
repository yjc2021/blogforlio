"use-client";

import { pageThemeAtom } from "@/atoms/pageTheme";
import { useAtom } from "jotai";
import { useCallback } from "react";

const ToggleSwitch = () => {
  const [pageTheme, setPageTheme] = useAtom(pageThemeAtom);

  const handleClickButton = useCallback(() => {
    setPageTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);
  return (
    <button className=" bg-cta" onClick={handleClickButton}>
      {pageTheme}
    </button>
  );
};

export default ToggleSwitch;
