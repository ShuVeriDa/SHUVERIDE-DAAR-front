export type SearchPizzasParamsType = {
  category: string
  sortBy: string
  order: string
  search: string
  currentPage: number
}

export type PizzaResponseType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: number
  rating: number;
  count: number
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
  liters?: number
}
export type CommentsResponseType = {
  id: string
  foodId: string
  text: string
  createdAt: string
}