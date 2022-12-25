import {createSlice} from "@reduxjs/toolkit";
import {StatusEnum} from "../types";
import {FoodResponseType} from "../../api/types";
import {AddToFavoritesTC, CreateFoodTC, FetchFoodsTC, FetchOneFoodTC, RemoveFoodTC, UpdateFoodTC} from "./food.actions";

const initialState: CartSliceStateType = {
  foods: [],
  food: null,
  status: StatusEnum.IDLE
}

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //Fetch all foods
      .addCase(FetchFoodsTC.pending, state => {
        state.status = StatusEnum.LOADING
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

      //UpdateFood
      .addCase(CreateFoodTC.pending, state => {
        state.status = StatusEnum.LOADING
        state.foods = []
      })
      .addCase(CreateFoodTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.foods.push(action.payload)
      })
      .addCase(CreateFoodTC.rejected, state => {
        state.status = StatusEnum.ERROR
      })

      //UpdateFood
      .addCase(UpdateFoodTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(UpdateFoodTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        let food = state.foods.find(obj => obj.id === action.payload.id)

        if (food)
          food = action.payload
      })
      .addCase(UpdateFoodTC.rejected, state => {
        state.status = StatusEnum.ERROR
      })

      //RemoveFood
      .addCase(RemoveFoodTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(RemoveFoodTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.foods = state.foods.filter(obj => obj.id !== action.payload.id)
      })
      .addCase(RemoveFoodTC.rejected, state => {
        state.status = StatusEnum.ERROR
      })

      //add to favorites
      .addCase(AddToFavoritesTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(AddToFavoritesTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        const food = state.foods.find(obj => obj.id === action.payload.id)

        if (food) {
          food.favorites = action.payload.favorites
        }
      })
      .addCase(AddToFavoritesTC.rejected, state => {
        state.status = StatusEnum.ERROR
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

