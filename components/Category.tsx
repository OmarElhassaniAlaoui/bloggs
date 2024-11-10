"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Button } from './ui/button';
import { CategoryContext } from '@/context/CtegoryContext';

const Category = ({ cat }: { cat: any }) => {
  const { categoryId, changeCategory } = useContext(CategoryContext);
  
  return (
    <li>
      <Button 
        onClick={() => changeCategory(cat.$id)}
        className={cat.$id === categoryId ? 'bg-blue-500' : 'bg-blue-300'}
      >
        {cat.title.toUpperCase()}
      </Button>
    </li>
  );
};

export default Category;