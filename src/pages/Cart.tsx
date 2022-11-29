import {FC} from "react";
import {Link} from "react-router-dom";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {CartItemBlock} from "../components/CartItemBlock";
import {useDispatch} from "react-redux";
import {clearItems} from "../redux/cart/cartSlice";
import {CartEmpty} from "../components/CartEmpty";
import {CartBigSVG, ClearCartSVG, LeftArrowSVG} from "../components/SvgComponent";

type CartPropsType = {}

export const Cart: FC<CartPropsType> = () => {
   const dispatch = useDispatch<AppDispatchType>()
   const {items, totalPrice} = useAppSelector(state => state.cart)
   const totalCount = items.reduce((sum, item) => sum + item.count, 0)

   const onClickClearItems = () => {
     if (window.confirm('Вы действительно хотите очистить корзину?')) {
         dispatch(clearItems())
      }
   }

   if (!totalPrice) {
      return <CartEmpty />
   }

   return (
      <div className='container containerCart'>
         <div className="cart">
            <div className="cartTop">
               <h2 className="contentTitle">
                  <CartBigSVG />
                  Корзина
               </h2>
               <div className="cartClear" onClick={onClickClearItems}>
                  <ClearCartSVG />
                  <span>Очистить корзину</span>
               </div>
            </div>
            <div className="contentItems">
               {items.map((obj) => <CartItemBlock key={obj.id} {...obj}/>)}
            </div>
            <div className="cartBottom">
               <div className="cartBottomDetails">
                  <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                  <span> Сумма заказа: <b>{totalPrice} ₽</b></span>
               </div>
               <div className="cartBottomButtons">
                  <Link to="/" className="button buttonOutline buttonAdd goBackBtn">
                    <LeftArrowSVG />
                     <span>Вернуться назад</span>
                  </Link>
                  <div className="button payBtn">
                     <span>Оплатить сейчас</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};