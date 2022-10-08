import axios, {AxiosResponse} from "axios";
import {SortListType} from "../components/SortPopup";

const instance = axios.create({
  baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


export const pizzaAPI = {
  getPizzas: (params: SearchPizzasParamsType) => {
    return instance.get<PizzaResponseType[]>(`items?page=${params.currentPage}&limit=4&${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
  },
  getOnePizza: (id: string) => {
    return instance.get<PizzaResponseType>(`items/${id}`,)
  }
}

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
  sizes: number[];
  types: number[];
  rating: number;
  count: number
}