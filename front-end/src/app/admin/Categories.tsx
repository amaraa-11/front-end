"use client";
import { useState, useEffect } from "react";

type CategoryType = {
  CategoryName: string;
  _id: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function fetchAll() {
    const res = await fetch(`http://localhost:4000/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-4">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="flex justify-between px-4 py-2 border bg-[#FFFFFF] rounded-full text-[#18181B] text-sm "
          >
            {category.CategoryName}
          </div>
        ))}
      </div>
    </div>
  );
}
export { Categories };
