"use client";
import { useEffect, useState } from "react";
import { CategoryType } from "./Dishes";

import { Card } from "@/components/ui/card";
import { AddDish } from "./AddDish";
import { CardComp } from "./Card";

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const FilteredFood = ({ _id, CategoryName }: CategoryType) => {
  const [foods, setFoods] = useState<FoodType[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("http://localhost:4000/food");
      const data = await response.json();
      setFoods(data);
    };

    fetchFood();
  }, [_id, CategoryName]);
  console.log(foods);

  return (
    <div className="w-full p-5 flex flex-col gap-5 rounded-xl bg-background">
      <h4 className=" text-xl font-semibold  ">{CategoryName}</h4>
      <div className="flex flex-wrap gap-4">
        <Card className="border border-dashed border-red-500 p px-2y-4 w-[270.75px] h-[241px] flex flex-col items-center  justify-center ">
          <AddDish CategoryName={CategoryName} _id={_id} setFoods={setFoods} />
        </Card>
        {foods?.map(
          (food) =>
            food.category === _id && (
              <div key={food._id}>
                <CardComp food={food} _id={_id} />
              </div>
            )
        )}
      </div>
    </div>
  );
};
