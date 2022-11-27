export type SearchPizzasParamsType = {
  category: string
  sortBy: string
  order: string
  search: string
  currentPage: number
}

export type SearchFoodParamsType = {
  title?: string;
  kind?: string;
  category?: string;
  price?: 'DESC' | 'ASC';
  rating?: 'DESC' | 'ASC';
  views?: 'DESC' | 'ASC';
  favorites?: 'DESC' | 'ASC';
  limit?: string;
  take?: string;
}

export type FoodResponseType = {
      id: string,
      title: string,
      imageUrl: string,
      price: number,
      kind: number,
      category: number
      types: number[] | null,
      sizes: number[] | null,
      liters: number | null,
      views: number,
      favorites: number,
      rating: number,
      createdAt: string,
      updatedAt: string
}

export type PizzaResponseType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: number
  rating: number;
  count: number
  views: number
  sizes?: number[];
  types?: number[] ;

}
export type DrinksResponseType = {
  id: string,
  title: string,
  price: number
  imageUrl: string,
  category: number
  rating: number
  count: number
  views: number
  liters?: number

}
export type CommentsResponseType = {
  id: string
  foodId: string
  text: string
  createdAt: string
}