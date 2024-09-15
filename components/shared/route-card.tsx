import GasIcon from "@/components/icons/gas.svg";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Route {
  logo: string;
  name: string;
  percentage: string;
  gasPrice: string;
  output: string;
  afterFees: string;
  isBest: boolean;
}

interface RouteItemProps extends Route {}

const RouteCard: React.FC<{ setShowRouteCard: (show: boolean) => void }> = ({
  setShowRouteCard,
}) => {
  return (
    <Card className="bg-white rounded-xl shadow-lg border-none overflow-auto w-[500px] max-w-lg">
      <RouteHeader setShowRouteCard={setShowRouteCard} />
      <CardContent className="px-4 py-2">
        <RouteList />
      </CardContent>
    </Card>
  );
};

const RouteHeader = ({
  setShowRouteCard,
}: {
  setShowRouteCard: (show: boolean) => void;
}) => {
  return (
    <CardHeader className="px-4 py-3 space-y-1 sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg font-semibold">Select route</h2>
        <Button
          variant="ghost"
          size="sm"
          className="size-8 p-2 bg-gray-100 rounded-lg"
          onClick={() => setShowRouteCard(false)}
        >
          <DoubleArrowLeftIcon className="size-4" />
        </Button>
      </div>
      <p className="text-gray-500 text-xs">
        Best route is selected based on net output after gas fees.
      </p>
    </CardHeader>
  );
};

const RouteItem: React.FC<RouteItemProps> = ({
  logo,
  name,
  percentage,
  gasPrice,
  output,
  afterFees,
  isBest,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-3 px-2 rounded-xl ${
        isBest ? "border-2 border-[#2AE77F]" : ""
      }`}
    >
      <div className="flex items-center space-x-1 w-1/4 ">
        <Image
          src={logo}
          alt={name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <p className="font-semibold text-sm">{name}</p>
      </div>
      <div className="flex items-center justify-end space-x-2 w-1/3 ">
        <div className="flex items-center justify-center">
          {isBest ? (
            <span className="text-[10px] text-green-500 bg-green-100 px-1.5 py-1 rounded-md font-medium">
              Best Return
            </span>
          ) : (
            <span className="text-[10px] bg-red-50 text-red-500 px-1.5 py-1 rounded-md font-medium">
              {percentage}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-1 justify-center bg-gray-100 rounded-md px-2 py-1">
          <Image src={GasIcon} alt="gas" width={12} height={12} />
          <p className="text-[10px] text-gray-500">{gasPrice}</p>
        </div>
      </div>
      <div className="text-right w-1/4">
        <p className="font-semibold text-sm">{output}</p>
        <p className="text-xs text-gray-500">~{afterFees}</p>
      </div>
    </div>
  );
};

const RouteList = () => {
  const routes: Route[] = [
    {
      logo: "/swapr.png",
      name: "Swapr",
      percentage: "",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: true,
    },
    {
      logo: "/cowswap.png",
      name: "Cowswap",
      percentage: "-0.2%",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: false,
    },
    {
      logo: "/paraswap.png",
      name: "Paraswap",
      percentage: "-0.3%",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: false,
    },
    {
      logo: "/enso.png",
      name: "Enso",
      percentage: "-0.3%",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: false,
    },
    {
      logo: "/1inch.png",
      name: "1inch",
      percentage: "-0.3%",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: false,
    },
    {
      logo: "/open-ocean.png",
      name: "OpenOcean",
      percentage: "-0.4%",
      gasPrice: "$24.62",
      output: "84.4335 USDC",
      afterFees: "$82.25 after fees",
      isBest: false,
    },
    {
      logo: "/0x.png",
      name: "0x",
      percentage: "-0.25%",
      gasPrice: "$24.62",
      output: "83.4335 USDC",
      afterFees: "$81.45 after fees",
      isBest: false,
    },
  ];

  return (
    <div className="space-y-1">
      {routes.map((route, index) => (
        <RouteItem key={index} {...route} />
      ))}
    </div>
  );
};

export default RouteCard;
