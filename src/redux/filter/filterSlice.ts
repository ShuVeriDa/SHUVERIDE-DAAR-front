import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortListType} from "../../components/SortPopup";
import {sortPropertyEnum} from "../pizza/pizzaSlice";

const initialState: FilterSliceStateType = {
  categoryId: 0,
  searchValue: '',
  currentPage: 1,
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
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
      state.categoryId = Number(action.payload.categoryId)
      state.sort.sortProperty = action.payload.sort.sortProperty
      state.searchValue = action.payload.searchValue
      state.currentPage = Number(action.payload.currentPage)
    }

  },
  extraReducers: {}
})
export const {setCategoryId, setFilters, setSort, setSearchValue, setCurrentPage} = FilterSlice.actions
export const filterReducer = FilterSlice.reducer

//type
interface FilterSliceStateType {
  categoryId: number
  searchValue: string
  currentPage: number
  sort: SortListType
}
