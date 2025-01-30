"use client";
import { ShoppingCart } from "lucide-react";

import { User } from "lucide-react";

export default function Page() {
  return (
    <div>
      <div className="w-full inset-0  h-[68px] bg-[#18181B] flex items-center justify-between sticky z-10">
        <img className="w-[146px] h-[44px] ml-16 " src="/headerLogo.png" />
        <div className="text-white flex  mr-16 gap-4 ">
          <ShoppingCart />
          <User />
        </div>
      </div>
    </div>
  );
}
export { Page };
