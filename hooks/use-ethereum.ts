// Grabs the window location orgin
"use client"

import { useEffect, useState } from "react"

export const useEthereum = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ethereum = typeof window !== "undefined" && window.ethereum ? window.ethereum : "";

  if (!mounted) {
    return "";
  }

  return ethereum;
}