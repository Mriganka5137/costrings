import Link from "next/link";

import Image from "next/image";
import HeartBeat from "@/components/icons/activity.svg";
import Ethereum from "@/components/icons/ethereum.svg";
import Metamask from "@/components/icons/metamask.svg";
import Purple from "@/components/icons/purple_ball.svg";
import Settings from "@/components/icons/settings.svg";

import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 bg-white  flex justify-between items-center ">
      <NavLinks />
      <NavActions />
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-between text-sm gap-2">
      <li className="font-medium bg-gray-100 px-3 py-2 rounded-lg">
        <Link href="/">Swap</Link>
      </li>
      <li className="font-medium hover:bg-gray-100 px-3 py-2 rounded-lg text-gray-600">
        <Link href="/">Bridge</Link>
      </li>
      <li className="font-medium hover:bg-gray-100 px-3 py-2 rounded-lg text-gray-600">
        <Link href="/">Pools</Link>
      </li>
      <li className="font-medium hover:bg-gray-100 px-3 py-2 rounded-lg text-gray-600">
        <Link href="/">Products</Link>
      </li>
    </ul>
  );
};

const NavActions = () => {
  return (
    <div className="flex items-center gap-2 max-md:hidden">
      <Image src={HeartBeat} alt="HeartBeat" width={40} height={40} />
      <Select>
        <SelectTrigger className="bg-gray-100 px-3 py-2 rounded-lg border-none w-fit space-x-2 focus:ring-0 focus:ring-offset-0">
          <Image src={Ethereum} alt="Wallet" width={20} height={20} />
          <span className="text-sm font-medium">Eth</span>
        </SelectTrigger>
        <SelectContent className="w-fit">
          <SelectItem value="ethereum">Ethereum</SelectItem>
          <SelectItem value="solana">Solana</SelectItem>
          <SelectItem value="bitcoin">Bitcoin</SelectItem>
        </SelectContent>
      </Select>
      <div className="bg-gray-100 rounded-full border-none flex items-center gap-2 w-[268px] p-[1px] h-10">
        <div className="flex items-center gap-2 px-4 py-2.5 ">
          <Image src={Metamask} alt="Metamask" width={20} height={20} />
          <span className="text-sm font-medium">2.3 Eth</span>
        </div>
        <div className=" bg-white rounded-full   h-9 w-[150px] py-1.5 px-2.5 ">
          <Select>
            <SelectTrigger className="p-0 border-none bg-transparent h-fit shadow-none focus:ring-0 focus:ring-offset-0">
              <Image src={Purple} alt="Purple" width={20} height={20} />
              <span className="text-sm font-medium">0x7e…4c3d</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Image
        src={Settings}
        alt="Settings"
        width={40}
        height={40}
        className=" bg-gray-100 p-2.5 rounded-xl"
      />
    </div>
  );
};
