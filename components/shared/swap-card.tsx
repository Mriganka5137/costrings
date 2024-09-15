import Ethereum from "@/components/icons/EthereumBlue.svg";
import Gas from "@/components/icons/gas.svg";
import Matic from "@/components/icons/matic.svg";
import Swapr from "@/components/icons/swapr.svg";
import { ArrowUpDown } from "lucide-react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  DoubleArrowRightIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Switch } from "../ui/switch";

interface SwapCardProps {
  showRouteCard: boolean;
  setShowRouteCard: (show: boolean) => void;
  sellAmount: number;
  setSellAmount: (amount: number) => void;
}

const SwapCard: React.FC<SwapCardProps> = ({
  showRouteCard,
  setShowRouteCard,
  sellAmount,
  setSellAmount,
}) => {
  const [receiveAmount, setReceiveAmount] = useState(0);

  useEffect(() => {
    setReceiveAmount(sellAmount * 2163.7);
  }, [sellAmount]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Card className="bg-white p-2 rounded-lg shadow-md w-full border-none">
        <CardHeader className="px-2 py-4 flex-row justify-between items-center">
          <CardTitle className="">Swap</CardTitle>
          <CardTitle>
            <MixerHorizontalIcon className=" " />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-2">
          {/* You Sell */}
          <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-end">
            <div className="space-y-2 flex-grow max-w-[60%]">
              <Label className="text-xs text-gray-500 uppercase">
                You Sell
              </Label>
              <Input
                value={sellAmount}
                onChange={(e) => setSellAmount(parseFloat(e.target.value) || 0)}
                className="border-none bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none text-3xl shadow-none caret-violet-500 font-medium leading-none tracking-tight p-0 w-full"
                type="number"
              />
              <span className="text-sm text-gray-500">$1,033.85</span>
            </div>
            <div className="space-y-2 flex flex-col justify-between items-end">
              <Select>
                <SelectTrigger className="bg-gray-100 px-3 py-2 rounded-lg border-none w-fit space-x-2 focus:ring-0 focus:ring-offset-0">
                  <div className="flex items-center gap-2">
                    <Image src={Ethereum} alt="Wallet" width={20} height={20} />
                    <span className="text-xs font-medium uppercase">Eth</span>
                  </div>
                </SelectTrigger>
                <SelectContent className="w-fit">
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                  <SelectItem value="bitcoin">Bitcoin</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-gray-400">Balance: 7.27</span>
                <span className="text-xs text-violet-500 font-medium">
                  Use MAX
                </span>
              </div>
            </div>
          </div>

          {/* You Receive */}
          <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-end relative">
            <div className="space-y-2 flex-grow max-w-[60%]">
              <Label className="text-[11px] text-gray-400 uppercase">
                You Receive
              </Label>
              <Input
                value={receiveAmount.toFixed(4)}
                readOnly
                placeholder="0.000"
                className="border-none bg-transparent focus:ring-0 focus:ring-offset-0 text-3xl shadow-none caret-violet-500 leading-none tracking-tight p-0 w-full text-violet-500 font-medium"
                type="number"
              />
              <span className="text-sm text-gray-500">$1,033.85</span>
            </div>
            <div className="space-y-2 flex flex-col justify-between items-end">
              <Select>
                <SelectTrigger className="bg-gray-100 px-3 py-2 rounded-lg border-none w-fit space-x-2 focus:ring-0 focus:ring-offset-0">
                  <div className="flex items-center gap-2">
                    <Image src={Matic} alt="Wallet" width={20} height={20} />
                    <p className="text-xs font-medium uppercase">Matic</p>
                  </div>
                </SelectTrigger>
                <SelectContent className="w-fit">
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                  <SelectItem value="bitcoin">Bitcoin</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-gray-400">Balance: 1500</span>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 top-0">
              <div className="bg-white rounded-xl p-2 shadow-md cursor-pointer">
                <ArrowUpDown className="text-gray-500 w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Swap with Swapr */}
          <Button className="w-full bg-violet-500 text-white rounded-lg py-5 font-semibold hover:bg-violet-600 space-x-2">
            <span>Swap with Swapr</span>
            <Image src={Swapr} alt="Swapr" width={18} height={18} />
          </Button>

          <AnimatePresence>
            {sellAmount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full border border-gray-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    Receive USDT to another wallet
                  </span>
                  <Switch />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
      <AnimatePresence>
        {sellAmount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-2.5 rounded-lg w-full border-violet-100 border-2 flex justify-between items-center">
              <div className="flex gap-2">
                <div className=" flex items-center gap-2">
                  <Image src={Swapr} alt="Swapr" width={18} height={18} />
                  <span className="text-sm text-gray-700">Swapr</span>
                  <ArrowRightIcon />
                </div>
                <div className="flex items-center gap-2 bg-violet-50 p-1.5 rounded-lg">
                  <Image src={Gas} alt="Gas" width={18} height={18} />
                  <span className="text-xs font-medium text-violet-600">
                    $24.62
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 p-1.5 rounded-lg">
                  <span className="text-xs font-medium text-emerald-500">
                    Best Return
                  </span>
                </div>
                <div className="flex items-center justify-center border border-gray-100 rounded-md px-2 py-1">
                  <ChevronDownIcon className="text-gray-500" />
                </div>
              </div>
              <div
                className="flex items-center gap-1 w-fit justify-end cursor-pointer"
                onClick={() => setShowRouteCard(true)}
              >
                <span className="text-xs text-violet-500 font-medium">
                  View all routes
                </span>
                <DoubleArrowRightIcon className="text-violet-500 size-3" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwapCard;
