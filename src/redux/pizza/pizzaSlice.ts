import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pizzaAPI} from "../../api/pizzaAPI";
import {PizzaResponseType, SearchPizzasParamsType} from "../../api/types";
import {StatusEnum} from "../types";

const initialState: CartSliceStateType = {
  items: [],
  item: null,
  status: StatusEnum.IDLE
}

export const FetchPizzasTC = createAsyncThunk<PizzaResponseType[], SearchPizzasParamsType>('pizza/fetchPizza', async (params) => {
  try {
    const res = await pizzaAPI.getPizzas(params)
    return res.data
  } catch (error) {
    throw new Error("Не удалось получить пиццы.")
  }
})

export const FetchOnePizzaTC = createAsyncThunk<PizzaResponseType, string>('pizza/fetchOnePizza', async (id) => {
  try {
    const res = await pizzaAPI.getOnePizza(id)
    return res.data
  } catch (error) {
    throw new Error(`Не удалось получить данную пиццу`)
  }
})

export const IncViewsPizzaTC = createAsyncThunk<PizzaResponseType, string>('pizza/incViewPizza', async (id) => {
  try {
    const res = await pizzaAPI.incViewsPizza(id)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось увеличить просмотр.')
  }
})

export const PizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //получить все пиццы
      .addCase(FetchPizzasTC.pending, (state) => {
        state.status = StatusEnum.LOADING
        state.items = []
      })
      .addCase(FetchPizzasTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.items = action.payload
      })
      .addCase(FetchPizzasTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
        state.items = []
      })
      //получить данную пиццу
      .addCase(FetchOnePizzaTC.pending, (state) => {
        state.status = StatusEnum.LOADING
        state.item = null
      })
      .addCase(FetchOnePizzaTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.item = action.payload
      })
      .addCase(FetchOnePizzaTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
        state.item = null
      })
      //увеличить просмотры
      .addCase(IncViewsPizzaTC.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(IncViewsPizzaTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        const findItem = state.items.find(item => item.id === action.payload.id)

        if (findItem) {
          findItem.views++
        }
      })
      .addCase(IncViewsPizzaTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
      })

  }
})
export const {} = PizzaSlice.actions
export const pizzaReducer = PizzaSlice.reducer


//types
export type CartSliceStateType = {
  items: PizzaResponseType[],
  item: PizzaResponseType | null
  status: StatusEnum
}

export enum sortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  // TITLE_DESC = "title",
  // TITLE_ASC = "-title",
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  VIEWS_DESC= 'views',
  VIEWS_ASC = '-views',
  FAVORITES_DESC = "favorites",
  FAVORITES_ASC = "-favorites",
}



