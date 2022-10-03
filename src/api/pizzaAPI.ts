import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


export const pizzaAPI = {
  getPizza: () => {
    return instance.get<PizzaResponseType[]>('items')
  }
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