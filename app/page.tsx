import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import { getAllBlogs } from "@/lib/actions/blog.actions";
import { getCategories } from "@/lib/actions/category.actions";



async function fetchCategories() {
  return await getCategories();
} 

async function fetchBlogs() { 
  return await getAllBlogs();
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  console.log(blogs);
  return (
    <div>
      <Categories categories={categories?.documents} />
      <Blogs blogs={blogs?.documents}/>
    </div>
  );
}
