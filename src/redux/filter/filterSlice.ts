import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CartInitialStateType = {
  categoryId: 0
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action:PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
      state.categoryId = Number(action.payload.categoryId)
    }
  },
  extraReducers: {}
})
export const {setCategoryId, setFilters} = FilterSlice.actions
export const filterReducer = FilterSlice.reducer

//type
interface CartInitialStateType {
  categoryId: number
}

export interface FilterSliceStateType {
  categoryId: number
}