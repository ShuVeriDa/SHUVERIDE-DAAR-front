import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatusEnum} from "../types";
import {DrinksResponseType, PizzaResponseType} from "../../api/types";
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

export const FetchOneDrinkTC = createAsyncThunk<DrinksResponseType, string>('drinks/fetchOneDrink', async (id) => {
  try {
    const res = await drinksAPI.getOneDrink(id)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error("Не удалось данный напиток.")
  }
})

export const DrinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setDrinkViews: (state, action:PayloadAction<PizzaResponseType>) => {
      const findItem = state.drinks.find(item => item.id === action.payload.id)

      if(findItem) {
        findItem.views++
      }
    }
    },
  extraReducers: builder => {
    builder
      //Получение всех напитков
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

      //Получение одного напитка
      .addCase(FetchOneDrinkTC.pending, (state) => {
        state.status = StatusEnum.LOADING
        state.drink = null
      })
      .addCase(FetchOneDrinkTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.drink = action.payload

      })
      .addCase(FetchOneDrinkTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
        state.drink = null
      })
  }
})


export const drinksReducer = DrinksSlice.reducer
export const {setDrinkViews} = DrinksSlice.actions

//types
export type DrinksSliceStateType = {
  drinks: DrinksResponseType[]
  drink: DrinksResponseType | null
  status: StatusEnum
}




