import {axiosClassic, instance} from "./interceptors";
import {FoodResponseType, SearchFoodParamsType} from "./types";

export const foodAPI = {
  fetchFoods : (params: SearchFoodParamsType) => {
    return axiosClassic
      .get<{foods: FoodResponseType[]}>(`foods/search?${params.title}&kind=${params.kind}&${params.category}&${params.sortBy}=${params.order}&limit=${params.limit}&take=${params.take}`)
  },
  fetchOneFood: (id: string) => {
    return axiosClassic.get<FoodResponseType>(`foods/${id}`)
  },
  removeFood: (id: string) => {
    return instance.delete<FoodResponseType>(`foods/${id}`)
  },
  addToFavorites: (id: string) => {
    return instance.post(`foods/${id}/favorites`)
  }
}