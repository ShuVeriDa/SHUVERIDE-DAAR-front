import {combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/cartSlice";
import {filterReducer} from "./filter/filterSlice";
import {commentReducer} from "./comment/commentSlice";
import {foodReducer} from "./food/foodSlice";
import {userReducer} from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer,
  cart: cartReducer,
  filter: filterReducer,
  comment: commentReducer
})