import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {StatusEnum} from "../types";
import {FoodResponseType, SearchFoodParamsType} from "../../api/types";
import {foodAPI} from "../../api/foodAPI";

const initialState: CartSliceStateType = {
  foods: [],
  food: null,
  status: StatusEnum.IDLE
}

export const FetchFoodsTC = createAsyncThunk<{foods: FoodResponseType[]}, SearchFoodParamsType> ('food/fetchFoods', async(params) => {
  try {
    const res = await foodAPI.fetchFoods(params)
    return res.data
  } catch (error) {
   throw new Error("Failed to get foods")
  }
})

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: {}
})

export const {} = FoodSlice.actions
export const foodReducer = FoodSlice.reducer

//types
export type CartSliceStateType = {
  foods: FoodResponseType[],
  food: FoodResponseType | null
  status: StatusEnum
}

export enum sortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

