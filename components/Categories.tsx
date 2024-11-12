"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useContext, useEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CtegoryContext";

const Categories = ({ categories }: { categories: any }) => {
  const {changeCategory} = useContext(CategoryContext); 

useEffect(() => {
  changeCategory(categories[0].$id);
}, [categories, changeCategory]); 

  return (
    <div
      className="flex w-full items-start gap-4 py-8"
      style={{ height: "100px" }}
    >
      <div className="flex flex-row justify-start gap-5 ">
        {categories?.map((cat: any) => (
          <div key={cat.$id}>
            <Category cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
