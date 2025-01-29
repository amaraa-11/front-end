"use client";
import path from "path";
import { useEffect, useState } from "react";
import { CategoryType } from "../admin/_components/Dishes";

export function useAuthFetch(path: string) {
  const [data, setData] = useState<CategoryType[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/${path}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
}
