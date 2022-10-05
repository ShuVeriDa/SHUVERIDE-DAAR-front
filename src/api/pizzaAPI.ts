import axios from "axios";

const instance = axios.create({
  baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


export const pizzaAPI = {
  getPizzas: (params: SearchPizzasParamsType) => {
    return instance.get<PizzaResponseType[]>(`items?${params.category}`)
  },
  getOnePizza: (id: string) => {
    return instance.get<PizzaResponseType>(`items/${id}`,)
  }
}

export type SearchPizzasParamsType = {
  category: string
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