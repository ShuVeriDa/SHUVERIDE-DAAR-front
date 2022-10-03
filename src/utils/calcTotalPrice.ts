import {CartItemType} from "../redux/cart/cartSlice";


export const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
}