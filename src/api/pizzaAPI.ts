import {axiosClassic, instance} from "./interceptors";
import { PizzaResponseType, SearchPizzasParamsType} from "./types";

export const pizzaAPI = {
  getPizzas: (params: SearchPizzasParamsType) => {
    return axiosClassic.get<PizzaResponseType[]>(`items?page=${params.currentPage}${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
  },
  getOnePizza: (id: string) => {
    return axiosClassic.get<PizzaResponseType>(`items/${id}`,)
  },
  incViewsPizza: (id: string,) => {
    return axiosClassic.put<PizzaResponseType>(`items/${id}`)
  }
}

