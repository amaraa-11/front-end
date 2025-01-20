"use client";
import { useState, useEffect } from "react";

type CategoryType = {
  CategoryName: string;
  _id: string;
};

export default function Navigation() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const CategoryName = prompt("Enter new category name");
    const response = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CategoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };
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
    <div className="bg-white w-full h-[176px] py-6 px-8 rounded-xl shadow-md mt-10">
      <h4 className="text-[18px] font-semibold mb-4">Dishes category</h4>
      <div className="flex flex-wrap items-center gap-4">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-center px-4 py-2 border border-[#E4E4E7] rounded-full text-[#18181B] text-sm"
          >
            {category.CategoryName}
          </div>
        ))}
        <button
          className="flex items-center justify-center w-9 h-9 bg-red-500 text-white rounded-full text-lg font-bold"
          onClick={addCategory}
        >
          +
        </button>
      </div>
    </div>
  );
}
export { Navigation };
