"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'; 
import { CategoryContext } from '@/context/CtegoryContext';

const Blogs = ({ blogs }: { blogs: any }) => { 
  const { categoryId } = useContext(CategoryContext); 
  console.log(categoryId);

  const filterBlogs = (blogs: any) => {
    return blogs?.filter((blog: any) => blog.categorieId?.$id === categoryId);
  };

  console.log(filterBlogs(blogs));

  return (
    <div>
      {filterBlogs(blogs).map((blog: any) => (
        <div key={blog.$id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;