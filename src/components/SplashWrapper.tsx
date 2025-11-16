"use client";

import SplashModernRed from "@/animations/splashScreen";
import { useState } from "react";

export default function SplashWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashModernRed onDone={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
}
