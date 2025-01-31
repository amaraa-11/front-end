"use client";
import { ShoppingCart } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { User } from "lucide-react";
import "./styles.css";
import Categories from "../admin/Categories";
import { useState, useEffect } from "react";
import { CardComp } from "../admin/_components/Card";
import { AddDish } from "../admin/_components/AddDish";
import { Card } from "@/components/ui/card";
import { FilteredFood, FoodType } from "../admin/_components/FilteredFood";
import { CategoryType } from "../admin/_components/Dishes";
import { Dishes } from "./_components/Dishes";

export default function Home() {
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
  console.log(categories);

  return (
    <div>
      <div className="w-full inset-0  h-[68px] bg-[#18181B] flex items-center justify-between sticky z-10">
        <img className="w-[146px] h-[44px] ml-16 " src="headerLogo.png" />
        <div className="text-white flex  mr-16 gap-4 ">
          <ShoppingCart />
          <User />
        </div>
      </div>
      <img className="w-full h-[900px] " src="homeLogo.png" />
      <div className="text-[30px] font-[600] text-[#FFFFFF] ml-16 mt-8 gap-10">
        Categories
        <div className=" flex gap-5 mt-3">
          {categories?.map((category) => (
            <div
              key={category._id}
              className="flex justify-center px-4 py-2 border bg-[#FFFFFF] rounded-full text-[#18181B] text-sm hover:border-[#EF4444] font-light space-x-2"
            >
              {category.CategoryName}
            </div>
          ))}
        </div>
        <Dishes />
      </div>
      <footer className="bg-[#18181B] w-full">
        <div className="  w-full h-[92px] bg-[#EF4444] text-white text-[30px] font-[600] flex items-center justify-center overflow-hidden ">
          <div className="text-animation-infinite-scroll flex gap-16">
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
          </div>
        </div>
        <div className=" mt-52 w-[1450px] h-[228px] flex justify-around  mx-auto px-8">
          <div className="flex items-start justify-start ml-[-140px]">
            <img src="footer.png" alt="NomNom Logo" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[16px] text-[#71717A]  font-[400]">
              NOMNOM
            </span>
            <div className="text-[16px] text-[#FAFAFA]  flex flex-col gap-2 ">
              <a className="hover:text-gray-500" href="#">
                Home
              </a>
              <span className="hover:text-gray-500">Contact us</span>
              <span className="hover:text-gray-500">Delivery zone</span>
            </div>
          </div>

          <div className=" gap-4 flex flex-col ">
            <span className="text-[16px] text-[#71717A]  font-[400] w-[full]  ">
              MENU
            </span>
            <ul className="flex flex-col text-[16px] text-[#FAFAFA] w-[400px] ">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-2 w-[50%]">
                  <li className="hover:text-gray-500">Appetizers</li>
                  <li className="hover:text-gray-500">Salads</li>
                  <li className="hover:text-gray-500">Pizzas</li>
                  <li className="hover:text-gray-500">Lunch favorites</li>
                  <li className="hover:text-gray-500">Main dishes</li>
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <li className="hover:text-gray-500">Side dishes</li>
                  <li className="hover:text-gray-500">Brunch</li>
                  <li className="hover:text-gray-500">Desserts</li>
                  <li className="hover:text-gray-500">Beverages</li>
                  <li className="hover:text-gray-500">Fish & Seafood</li>
                </div>
              </div>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-[16px] text-[#71717A] font-[400]">
              FOLLOW US
            </span>
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://www.facebook.com/search/top?q=pinecone%20academy">
                <Facebook className="text-white" />
              </a>
              <a href="https://www.instagram.com/pineconemongolia/">
                <Instagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-36">
          <div className="w-[1450px] h-[84px] border-t-2 border-gray-500 flex justify-around text-[#71717A] text-[14px] ">
            <div className="mt-5 flex justify-between gap-20 w-[1450px] ">
              <p> Copy right 2024 © Nomnom LLC </p>
              <p> Privacy policy </p>
              <p>Terms and conditoin</p>
              <p>Cookie policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export { Home };
