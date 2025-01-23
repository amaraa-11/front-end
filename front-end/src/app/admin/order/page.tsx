"use client";

import React from "react";
import OrderList from "./orderList";
import OrderHeader from "./orderHeader";
import SideBar from "../sideBar";
export default function OrderListHome() {
  return (
    <div className="w-full  bg-[#FFFFFF] p-8 mt-10 rounded-3xl ">
      <OrderHeader />
      <OrderList />
    </div>
  );
}
