"use server";
import { database } from "../appwrite.config";
// import { revalidatePath } from "next/cache";

export const getCategories = async () => {
  try {
    const categories = await database.listDocuments(
      process.env.DATABASE_ID!,
      process.env.CATEGORIES_COLLECTION_ID!
    );
    return categories;
  } catch (error) {
    console.error(error);
  }
};
