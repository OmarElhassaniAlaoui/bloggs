// context/CategoryProvider.d.ts
declare module "../context/CategoryProvider" {
    import { ReactNode } from 'react';
  
    interface CategoryContextType {
      selectedCategory: string;
      setSelectedCategory: (category: string) => void;
    }
  
    export const CategoryContext: React.Context<CategoryContextType>;
  
    export function CategoryProvider({ children }: { children: ReactNode }): JSX.Element;
  }