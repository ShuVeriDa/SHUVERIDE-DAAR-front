import {instance} from "./intance";

export const drinksAPI = {
  getDrinks: () => {
    return instance.get<DrinksResponseType[]>('/drinks')
  },
}

export type DrinksResponseType = {
  id: string,
  imageUrl: string,
  title: string,
  liters: number
  price: number
  category: number
  rating: number
}
