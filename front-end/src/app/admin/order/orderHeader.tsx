import { CalendarDays } from "lucide-react";
export default function OrderHeader() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Order Management
      </h1>
      <div className="flex items-center justify-between bg-white text-black p-4  rounded-tl-lg rounded-tr-xl">
        <div>
          <h1 className="text-[20px] font-[700]">Orders</h1>
          <p className="text-[12px] font-[500] text-gray-400">32 Items</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-gray px-4 py-2 rounded-full border border-gray-700">
            <CalendarDays className="size-[16px] mr-2" />
            <span className="text-sm ">13 June 2023 - 14 July 2023</span>
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white text-[14px] font-[500] px-4 py-2 rounded-full">
            Change delivery state
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-8 items-center gap-4 border border-gray-200 p-4 ">
          <input type="checkbox" className="col-span-1 w-4 h-4" />
          <span className="col-span-1 text-gray-600">№</span>
          <span className="col-span-2 text-gray-800 truncate">Customer</span>
          <span className="col-span-1 text-gray-600">Food</span>
          <span className="col-span-1 text-gray-600">Date</span>
          <span className="col-span-1 text-gray-800">Total</span>
          <div className="text-[14px] font-[500] ">Delivery state</div>
        </div>
      </div>
    </div>
  );
}
