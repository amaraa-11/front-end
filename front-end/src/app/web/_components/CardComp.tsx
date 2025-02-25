import { Card } from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";
import { AddOrder } from "./AddOrder";

export const CardComp = ({ food, id }: any) => {
  return (
    <Card className="border bg-background p-4 w-[270.75px] h-[241px] flex flex-col gap-5 items-center  justify-center ">
      <div
        className={`w-[238.75px] h-[129px]  bg-cover bg-center rounded-xl flex justify-end items-end p-5`}
        style={{ backgroundImage: `url(${food.image})` }}
      >
        <AddOrder food={food} id={id} />
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between gap-10">
          <span className="text-red-500 ">{food.name}</span>
          <span>${food.price}</span>
        </div>
        <h4 className="text-xs text-[#09090B]">{food.ingredients}</h4>
      </div>
    </Card>
  );
};
