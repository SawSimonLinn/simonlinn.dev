// components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec preload
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black grid place-items-center text-pixel font-arcade text-center">
      <div className="space-y-4">
        <p className="text-xl">Loading...</p>
        <p className="text-2xl animate-pulse">PRESS START</p>
        <div className="w-40 h-2 bg-gray-700 mx-auto mt-4 relative overflow-hidden rounded">
          <div className="absolute h-full w-1/3 bg-pink-500 animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
