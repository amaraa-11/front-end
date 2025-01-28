"use client";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

type CategoryType = {
  CategoryName: string;
  _id: string;
};

export default function Navigation() {
  const [categories, setCategory] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const response = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categories }),
    });
    const data = await response.json();
    setCategory([...categories, data.newItem]);
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
    setCategory(data);
  }

  const onChange = (e: any) => {
    console.log("--", e.target.CaregoryName, e.target.value);
    setCategory({
      ...categories,
      [e.target.CategoryName]: e.target.value,
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-[#FFFFFF] w-11/12 h-[176px] py-6 px-8 rounded-xl shadow-md mt-10 ">
        <h4 className="text-[18px] font-semibold mb-4">Dishes category</h4>
        <div className="flex flex-wrap items-center gap-4">
          {categories?.map((category) => (
            <Link key={category._id} href={`/admin/menu/${category._id}`}>
              <div className="flex items-center justify-center px-4 py-2 border border-[#E4E4E7] rounded-full text-[#18181B] text-sm hover:border-[#EF4444]">
                {category.CategoryName}
              </div>
            </Link>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="rounded-full  p-[10px]">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-6 w-[460px] p-6">
              <DialogHeader className="pb-4">
                <DialogTitle>Add new category</DialogTitle>
              </DialogHeader>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="categoryName">Category name</Label>
                <Input
                  id="categoryName"
                  type="text"
                  className="w-[412px]"
                  placeholder="Type category name..."
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  pattern="[A-Za-z0-9\s]+"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    className="bg-white border shadow-none"
                    type="submit"
                    onClick={() => {
                      addCategory();
                    }}
                  >
                    Add category
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
export { Navigation };
