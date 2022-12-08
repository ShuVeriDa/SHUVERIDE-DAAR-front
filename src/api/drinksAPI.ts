import {axiosClassic, instance} from "./interceptors";
import {DrinksResponseType} from "./types";

export const drinksAPI = {
  getDrinks: () => {
    return axiosClassic.get<DrinksResponseType[]>('/drinks')
  },
  getOneDrink: (id: string) => {
    return axiosClassic.get<DrinksResponseType>(`/drinks/${id}`)
  }
}
