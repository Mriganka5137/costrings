"use client";

import { useState } from "react";
import RouteCard from "@/components/shared/route-card";
import SwapCard from "@/components/shared/swap-card";

export default function Home() {
  const [showRouteCard, setShowRouteCard] = useState(false);
  const [sellAmount, setSellAmount] = useState(0);

  return (
    <div className="flex justify-center items-start pt-20">
      <div className="relative w-full max-w-[900px] flex justify-center">
        <div
          className={`transition-all duration-1000 ease-in-out ${
            showRouteCard
              ? "-translate-x-[calc(50%+1rem)] opacity-90 "
              : "translate-x-0 opacity-100 scale-100"
          }`}
        >
          <SwapCard
            showRouteCard={showRouteCard}
            setShowRouteCard={setShowRouteCard}
            sellAmount={sellAmount}
            setSellAmount={setSellAmount}
          />
        </div>
        <div
          className={`transition-all duration-1000 ease-in-out absolute top-0 left-1/2 w-full max-w-md ${
            showRouteCard
              ? "opacity-100 translate-x-[calc(0%+1rem)]"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <RouteCard setShowRouteCard={setShowRouteCard} />
        </div>
      </div>
    </div>
  );
}
