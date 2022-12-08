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
  sortBy: string
  order: 'DESC' | 'ASC'
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
  liters: number | null | undefined
  views: number,
  favorites: number,
  rating: number,
  createdAt: string,
  updatedAt: string
  count: number
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
  types?: number[];

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

export type RegisterType = {
    nickName: string,
    email: string,
    password: string,
    isAdmin: boolean,
    avatar: string
}

export type LoginType = {
  email: string,
  password: string
}

