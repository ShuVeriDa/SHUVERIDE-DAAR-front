import {createAsyncThunk} from "@reduxjs/toolkit";
import {FoodResponseType, SearchFoodParamsType} from "../../api/types";
import {foodAPI} from "../../api/foodAPI";

export const FetchFoodsTC = createAsyncThunk<{ foods: FoodResponseType[] }, SearchFoodParamsType>('food/fetchFoods', async (params) => {
  try {
    const res = await foodAPI.fetchFoods(params)
    return res.data
  } catch (error) {
    throw new Error("Failed to get foods")
  }
})
export const FetchOneFoodTC = createAsyncThunk<FoodResponseType, string>('food/fetchOneFood', async (id) => {
  try {
    const {data} = await foodAPI.fetchOneFood(id)
    return data
  } catch (error) {
    throw new Error(`Failed to get one food`)
  }
})