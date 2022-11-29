import {combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/cartSlice";
import {filterReducer} from "./filter/filterSlice";
import {commentReducer} from "./comment/commentSlice";
import {foodReducer} from "./food/foodSlice";

export const rootReducer = combineReducers({
  food: foodReducer,
  cart: cartReducer,
  filter: filterReducer,
  comment: commentReducer
})