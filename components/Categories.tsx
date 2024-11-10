/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Category from "./Category";

const Categories = ({ categories }: { categories: any }) => {
  return (
    <div
      className="flex w-full items-start gap-4 py-8"
      style={{ height: "100vh" }}
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
