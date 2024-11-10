import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import { getCategories } from "@/lib/actions/category.actions";
export default async function Home() {
  const categories = await getCategories();
  return (
    <div>
      <Categories categories={categories?.documents} />
      <Blogs />
    </div>
  );
}
