import {createAsyncThunk} from "@reduxjs/toolkit";
import {CreateFoodType, FoodResponseType, SearchFoodParamsType, UpdateFoodType} from "../../api/types";
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

export const CreateFoodTC = createAsyncThunk<FoodResponseType, CreateFoodType>(`food/createFood`, async (data) => {
  try {
    const res = await foodAPI.createFood(data)
    return res.data
  } catch (error) {
    throw new Error(`Failed to create food`)
  }
})

export const UpdateFoodTC = createAsyncThunk<FoodResponseType, { id: string, data: UpdateFoodType }>(`food/updateFood`, async ({id, data}) => {
  try {
    const res = await foodAPI.updateFood(id, data)
    return res.data
  } catch (error) {
    throw new Error(`Failed to update food`)
  }
})

export const RemoveFoodTC = createAsyncThunk(`food/removeFood`, async (id: string) => {
  try {
    const res = await foodAPI.removeFood(id)
    return res.data
  } catch (error) {
    throw new Error(`Failed to remove`)
  }
})

export const AddToFavoritesTC = createAsyncThunk<FoodResponseType, string>('food/addToFavorites', async (id) => {
  try {
    const {data} = await foodAPI.addToFavorites(id)
    return data
  } catch (error) {
    throw new Error('Failed to add food to favorites')
  }
})