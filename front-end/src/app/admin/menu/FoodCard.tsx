"use client";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type FoodType = {
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  _id: string;
};
export default function FoodCard() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);
  const addFood = async () => {
    try {
      const response = await fetch("http://localhost:4000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Failed to add food");
        return;
      }
      const data = await response.json();
      const newFood = data.newItem;
      setFoods([...foods, newFood]);
      setSelectedFood(newFood);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:4000/food`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.error("Failed to fetch food data");
      return;
    }
    const data = await res.json();
    setFoods(data);
  }
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <div>
      {/* <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button
            className="hidden"
            aria-label="Open modal for food details"
          ></button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Food Details</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
      <div className="w-screen-full bg-white rounded-2xl mt-5 flex flex-row-reverse">
        <div className="grid grid-cols-5 gap-6 p-12">
          {foods.map((food) =>
            food ? (
              <div
                key={food._id}
                className="bg-white w-[270px] h-[241px] rounded-3xl border"
              >
                <div>
                  <img
                    src="https://i.ytimg.com/vi/8tpqNEoJpEs/maxresdefault.jpg"
                    alt={food.foodName || "No Name"}
                    className="w-full h-[135px] object-cover object-center rounded-t-3xl"
                  />
                  <Pencil />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-red-500 font-semibold text-[14px]">
                      {food.foodName}
                    </p>
                    <p className="text-[12px] font-semibold">
                      ${food.price ? food.price.toFixed(2) : "0.00"}
                    </p>
                  </div>
                  <p className="text-[12px] text-gray-600 mt-2">
                    {food.ingredients}
                  </p>
                </div>

                <div>
                  <button
                    className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 w-[270px] h-[241px] bg-white rounded-2xl shadow-md"
                    onClick={addFood}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full text-2xl font-bold">
                      +
                    </div>
                    <p className="text-gray-600 mt-4 text-center text-sm">
                      Add new Dish
                    </p>
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
