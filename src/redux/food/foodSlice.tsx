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

export const FetchOneFoodTC = createAsyncThunk<FoodResponseType, string>('food/fetchOneFood', async (id) => {
  try {
    const {data} = await foodAPI.fetchOneFood(id)
    return data
  } catch (error) {
    throw new Error(`Failed to get one food`)
  }
})

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //Fetch all foods
      .addCase(FetchFoodsTC.pending, state => {
        state.status =StatusEnum.LOADING
        state.foods = []
      })
      .addCase(FetchFoodsTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.foods = action.payload.foods
      })
      .addCase(FetchFoodsTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.foods = []
      })

    //Fetch one food by id
      .addCase(FetchOneFoodTC.pending, state => {
        state.status = StatusEnum.LOADING
        state.food = null
      })
      .addCase(FetchOneFoodTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.food = action.payload
      })
      .addCase(FetchOneFoodTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.food = null
      })
  }
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

