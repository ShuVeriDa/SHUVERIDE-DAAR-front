import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pizzaAPI, PizzaResponseType, SearchPizzasParamsType} from "../../api/pizzaAPI";

export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

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

export const PizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
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

  }
})

export const pizzaReducer = PizzaSlice.reducer


//types
export type CartSliceStateType = {
  items: PizzaResponseType[],
  item: PizzaResponseType | null
  status: StatusEnum
}

export enum sortPropertyEnum {
  RATING_DESK = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESK = "title",
  TITLE_ASC = "-title",
  PRICE_DESK = 'price',
  PRICE_ASC = '-price',
}



