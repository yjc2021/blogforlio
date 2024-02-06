"use client";

import Link from "next/link";
import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";

const Navigation = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-lg bg-card p-3">
      <Logo />
      <div className="flex items-center gap-3">
        <ToggleSwitch />
        <Link href="/home">Hi!</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navigation;
