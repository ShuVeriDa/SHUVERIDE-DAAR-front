import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pizzaAPI, PizzaResponseType} from "../../api/pizzaAPI";

const initialState: CartSliceStateType = {
  items: [],
}

export const FetchPizzaTC = createAsyncThunk<PizzaResponseType[]>('pizza/fetchPizza', async () => {
  try {
    const res = await pizzaAPI.getPizza()
    return res.data
  } catch (error) {
    throw new Error("Не удалось получить пиццы.")
  }
})

export const PizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(FetchPizzaTC.pending, (state, action) => {
        state.items = []
      })
      .addCase(FetchPizzaTC.fulfilled, (state, action) => {
        state.items = action.payload
      })
      .addCase(FetchPizzaTC.rejected, (state, action) => {
        state.items = []
      })
  }
})

export const pizzaReducer = PizzaSlice.reducer


//types
export type CartSliceStateType = {
  items: PizzaResponseType[],
}

