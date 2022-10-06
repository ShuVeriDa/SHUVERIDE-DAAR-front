import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortListType} from "../../components/SortPopup";
import {sortPropertyEnum} from "../pizza/pizzaSlice";

const initialState: FilterSliceStateType = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: sortPropertyEnum.RATING_DESK,
  },
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action:PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSort: (state, action: PayloadAction<SortListType>) => {
      state.sort = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
      state.categoryId = Number(action.payload.categoryId)
      state.sort.sortProperty = action.payload.sort.sortProperty
    }

  },
  extraReducers: {}
})
export const {setCategoryId, setFilters, setSort} = FilterSlice.actions
export const filterReducer = FilterSlice.reducer

//type
interface FilterSliceStateType {
  categoryId: number
  sort: SortListType
}
