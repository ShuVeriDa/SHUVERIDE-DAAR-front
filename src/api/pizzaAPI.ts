import {instance} from "./interceptors";
import { PizzaResponseType, SearchPizzasParamsType} from "./types";

export const pizzaAPI = {
  getPizzas: (params: SearchPizzasParamsType) => {
    return instance.get<PizzaResponseType[]>(`items?page=${params.currentPage}${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
  },
  getOnePizza: (id: string) => {
    return instance.get<PizzaResponseType>(`items/${id}`,)
  },
  incViewsPizza: (id: string,) => {
    return instance.put<PizzaResponseType>(`items/${id}`)
  }
}

