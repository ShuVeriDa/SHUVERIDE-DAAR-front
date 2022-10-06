import {combineReducers} from "@reduxjs/toolkit";
import {pizzaReducer} from "./pizza/pizzaSlice";
import {cartReducer} from "./cart/cartSlice";
import {filterReducer} from "./filter/filterSlice";

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
  cart: cartReducer,
  filter: filterReducer
})