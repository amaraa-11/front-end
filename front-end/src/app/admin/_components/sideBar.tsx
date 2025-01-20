import { HandPlatter } from "lucide-react";
import { Dock } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SideBar() {
  return (
    <div className="w-[205px] min-h-[1024px] bg-white ">
      <div className="flex items-center justify-center mt-4 ">
        <div>
          <img src="adminLogo.png" />
        </div>
        <div>
          <p className="text-[18px] font-[600] leading-[28px]">NomNom</p>
          <p className="text-[12px] font-[400] leading-[16px] text-[#71717A]">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[200px] h-auto p-4 items-start ml-5">
          <button className="w-[165px] h-[40px]  rounded-full flex items-center bg-[#FFFFFF] hover:bg-[#18181B] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
            <Dock /> Food menu
          </button>
          <button className="w-[165px] h-[40px]  rounded-full flex items-center bg-[#FFFFFF] hover:bg-[#18181B] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
            <Car /> Orders
          </button>
          <button className="w-[165px] h-[40px]  rounded-full flex items-center bg-[#FFFFFF] hover:bg-[#18181B] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
            <Settings /> Settings
          </button>
        </div>
      </div>
    </div>
  );
}
