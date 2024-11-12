"use server";
import { database } from "../appwrite.config";
import { revalidatePath } from "next/cache";

export const getAllBlogs = async () => {
  try {
    const blogs = await database.listDocuments(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!
    );
    return blogs;
  } catch (error) {
    console.error(error);
  }
};

export const getBlog = async (id: string) => {
  try {
    const blog = await database.getDocument(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!,
      id
    );
    return blog;
  } catch (error) {
    console.error(error);
  }
};

export const revalidateBlogs = async () => {
  try {
     revalidatePath("/");
  } catch (error) {
    console.error("Failed to revalidate path:", error);
  }
};
