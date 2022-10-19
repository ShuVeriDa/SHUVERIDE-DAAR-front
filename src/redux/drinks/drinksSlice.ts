import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {StatusEnum} from "../types";
import {DrinksResponseType} from "../../api/types";
import {drinksAPI} from "../../api/drinksAPI";


const initialState: DrinksSliceStateType = {
  drinks: [],
  drink: null,
  status: StatusEnum.IDLE
}

export const FetchDrinksTC = createAsyncThunk<DrinksResponseType[]>('drinks/fetchDrinks', async () => {
  try {
    const res = await drinksAPI.getDrinks()
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error("Не удалось получить напитки.")
  }
})

export const DrinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(FetchDrinksTC.pending, (state) => {
        state.status = StatusEnum.LOADING
        state.drinks = []
      })
      .addCase(FetchDrinksTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.drinks = action.payload
      })
      .addCase(FetchDrinksTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
        state.drinks = []
      })
  }
})


export const drinksReducer = DrinksSlice.reducer
export const {} = DrinksSlice.actions

//types
export type DrinksSliceStateType = {
  drinks: DrinksResponseType[]
  drink: DrinksResponseType | null
  status: StatusEnum
}




