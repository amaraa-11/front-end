"use client";

import { useState, useEffect } from "react";

type CategoryType = {
  CategoryName: string;
  _id: number;
  value: string;
};

export default function Home() {
  const [categories, setCategory] = useState<CategoryType[]>([]);
  const [value, setValue] = useState<string>("");
  async function foodCategory() {
    const res = await fetch(`http://localhost:4000/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategory(data);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    foodCategory();
  }, []);

  const addFood = async () => {
    const newFood = { CategoryName: value };
    const response = await fetch(`http://localhost:4000/add-movie`, {
      method: "POST",
      body: JSON.stringify(newFood),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const foodData = await response.json();
    setCategory((prevCategory) => [...prevCategory, foodData]);
  };
  return (
    <div>
      {categories?.map((category) => (
        <div key={category._id} className="flex justify-row-reverse ">
          {category.CategoryName}
        </div>
      ))}
    </div>
  );
}
