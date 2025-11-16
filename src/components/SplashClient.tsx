"use client";
import React from "react";
import SplashWrapper from "@/components/SplashWrapper";

export default function SplashClient({ children }: { children: React.ReactNode }) {
  return <SplashWrapper>{children}</SplashWrapper>;
}
