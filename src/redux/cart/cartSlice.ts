import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CartInitialStateType = {
  items: [],
  totalPrice: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<CartItemType>) => {
      const findItem = state.items.find(item => item.id === action.payload.id)

      if (findItem){
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
    }
  },
  extraReducers: {}
})
export const {addItem} = CartSlice.actions
export const cartReducer = CartSlice.reducer

//type
type CartInitialStateType = {
  items: CartItemType[]
  totalPrice: number
}

export type CartItemType = {
  id: string
  title: string
  price: number
  imageUrl: string
  type: string
  size: number
  count: number
}