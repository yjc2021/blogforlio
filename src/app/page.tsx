"use client";

import PaletteCard from "@/components/PaletteCard";
import ToggleSwitch from "@/components/ToggleSwitch";

const Home = () => {
  return (
    <>
      <ToggleSwitch />
      <div className="flex-col gap-2">
        <PaletteCard backgroundColor="bg-cta" />
        <PaletteCard backgroundColor="bg-cta-active" />
        <PaletteCard backgroundColor="bg-cta-text" />
        <PaletteCard backgroundColor="bg-card" />
        <PaletteCard backgroundColor="bg-background" />
        <PaletteCard backgroundColor="bg-border" />
      </div>
    </>
  );
};

export default Home;
