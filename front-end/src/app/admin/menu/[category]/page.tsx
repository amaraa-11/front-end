"use client";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { AddDish } from "../../_components/AddDish";
import { CardComp } from "../../_components/Card";
import { useParams } from "next/navigation";

export default function Menu() {
  const params = useParams();
  const [foods, setFoods] = useState<any>();
  const [foodCategory, setFoodCategory] = useState<any>();
  const fetchFoods = async () => {
    const res = await fetch("http://localhost:4000/food/");
    const data = await res.json();
    setFoods(data);
  };
  const fetchFoodCategory = async () => {
    const res = await fetch(
      `http://localhost:4000/food-category/${params.category}`
    );
    const data = await res.json();
    setFoodCategory(data);
  };
  useEffect(() => {
    fetchFoods();
    fetchFoodCategory();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-11/12 p-5 flex flex-col gap-5 rounded-xl bg-background mt-2">
        <h4 className="text-xl font-semibold">{foodCategory?.CategoryName}</h4>
        <div className="flex flex-wrap gap-4">
          <Card className="border border-dashed border-red-500 p px-2y-4 w-[270.75px] h-[241px] flex flex-col items-center  justify-center ">
            <AddDish
              CategoryName={foodCategory?.CategoryName}
              _id={foodCategory?._id}
              setFoods={setFoods}
            />
          </Card>
          {foods
            ?.filter((food: any) => params.category == food.category)
            .map((food: any) => (
              <div key={food._id}>
                <CardComp food={food} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
