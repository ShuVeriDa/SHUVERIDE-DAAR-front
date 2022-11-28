import {instance} from "./intance";
import {FoodResponseType, SearchFoodParamsType} from "./types";

export const foodAPI = {
  fetchFoods : (params: SearchFoodParamsType) => {
    return instance
      .get<{foods: FoodResponseType[]}>(`foods/search?title=${params.title}&kind=${params.kind}&category=${params.category}&price=${params.price}&rating=${params.rating}&views=${params.views}&favorites=${params.favorites}&limit=${params.limit}&take=${params.take}`)
  },
  fetchOneFood: (id: string) => {
    return instance.get<FoodResponseType>(`foods/${id}`)
  },
  removeFood: (id: string) => {
    return instance.delete<FoodResponseType>(`foods/${id}`)
  }
}