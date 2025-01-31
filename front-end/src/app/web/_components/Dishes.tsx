"use client";
import { useParams } from "next/navigation";
import { useAuthFetch } from "../../(hooks)/page";
import { FilteredFood } from "./FilteredFood";

export type CategoryType = {
  CategoryName: string;
  _id: string;
};

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const Dishes = () => {
  const params = useParams();
  const foodCategory: CategoryType[] = useAuthFetch("food-category") || [];
  const foods: any[] = useAuthFetch("food") || [];

  if (!foods || foods.length === 0) return null;
  console.log(foods);
  return (
    <div className="flex flex-col gap-[54px]">
      {!params.id
        ? foodCategory?.map((category) => {
            const categoryFoods = foods.filter(
              (food) => food.category === category._id
            );

            if (categoryFoods.length === 0) return null;

            return (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category?.CategoryName}
                  foods={categoryFoods}
                />
              </div>
            );
          })
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category?.CategoryName}
                  foods={foods}
                />
              </div>
            ))}
    </div>
  );
};
