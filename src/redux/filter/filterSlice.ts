import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortListType} from "../../components/SortPopup";
import {sortPropertyEnum} from "../pizza/pizzaSlice";

const initialState: FilterSliceStateType = {
  categoryId: 0,
  searchValue: '',
  sort: {
    name: "популярности (DESC)",
    sortProperty: sortPropertyEnum.RATING_DESC,
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
      state.categoryId = Number(action.payload.categoryId)
      state.sort.sortProperty = action.payload.sort.sortProperty
      state.searchValue = action.payload.searchValue
    }

  },
  extraReducers: {}
})
export const {setCategoryId, setFilters, setSort, setSearchValue} = FilterSlice.actions
export const filterReducer = FilterSlice.reducer

//type
interface FilterSliceStateType {
  categoryId: number
  searchValue: string
  sort: SortListType
}
