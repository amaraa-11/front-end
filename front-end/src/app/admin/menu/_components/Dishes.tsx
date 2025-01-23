"use client";
import { useEffect, useState } from "react";
import { FilteredFood } from "../_components/FilteredFood";
import { useParams } from "next/navigation";

export type CategoryType = {
  CategoryName: string;
  _id: string;
};

export const Dishes = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();
  const params = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:4000/food-category");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  }, []);

  //   const grouped = Object.groupBy(food, ({ category }) => category);

  //   console.log(grouped)
  return (
    <div className="flex flex-col gap-5 w-11/12 mt-10 ml-20">
      {!params.id
        ? foodCategory?.map((category) => (
            <div key={category._id}>
              <FilteredFood
                _id={category._id}
                CategoryName={category.CategoryName}
              />
            </div>
          ))
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  CategoryName={category.CategoryName}
                />
              </div>
            ))}
    </div>
  );
};
