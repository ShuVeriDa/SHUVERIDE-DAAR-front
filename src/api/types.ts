import {IUserState} from "../redux/user/auth.interface";

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
  text: string
  favorites: number
  createdAt: string
  updatedAt: string
  food: {
    id: string,
    title: string
  }
  user: IUserState
}

export type CreateCommentType = {
  foodId: string | undefined
  text: string
}

export type UpdateCommentType =  {id:string} & CreateCommentType

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

export type UploadFileResponseType = {
  url: string,
  name: string
}

export type UploadType = {
  folderName: string
  file: FormData
}
