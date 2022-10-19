import {instance} from "./intance";
import {DrinksResponseType} from "./types";

export const drinksAPI = {
  getDrinks: () => {
    return instance.get<DrinksResponseType[]>('/drinks')
  },
  getOneDrink: (id: string) => {
    return instance.get<DrinksResponseType>(`/drinks/${id}`)
  }
}
