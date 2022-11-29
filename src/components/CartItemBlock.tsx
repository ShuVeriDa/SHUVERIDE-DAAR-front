import {FC} from "react";
import {addItem, CartItemType, minusItem, removeItem} from "../redux/cart/cartSlice";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../redux/store";
import {MinusSVG, PlusSVG, RemoveSVG} from "./SvgComponent";

type CartItemPropsType = {}

export const CartItemBlock: FC<CartItemPropsType & CartItemType> = (
  {
    id, type, size, count,
    price, title, imageUrl, liter
  }) => {
  const dispatch = useDispatch<AppDispatchType>()

  const addItemHandler = () => {
    dispatch(addItem({id} as CartItemType))
  }

  const minusItemHandler = () => {
    dispatch(minusItem({id} as CartItemType))
  }

  const removeItemHandler = () => {
    if (window.confirm(`Вы действительно хотите удалить пиццу "${title}"?`)) {
      dispatch(removeItem({id} as CartItemType))
    }
  }

  return (
    <div className="cartItem">
      <div className="cartItemImg">
        <img
          className="pizzaBlockImage"
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className="cartItemInfo">
        <h3>{title}</h3>
        {size ? <p>{type}, {size} см.</p> : <p>{liter} л.</p>}

      </div>
      <div className="cartItemCount">
        <button disabled={count === 1}
                onClick={minusItemHandler}
                className={"button buttonOutline buttonCircle cartItemCountMinus"}
        >
          <MinusSVG/>

        </button>
        <b>{count}</b>
        <button onClick={addItemHandler}
                className="button buttonOutline buttonCircle cart__item-count-plus"
        >
          <PlusSVG/>
        </button>
      </div>
      <div className="cartItemPrice">
        <b>{price * count} ₽</b>
      </div>
      <div className="cartItemRemove">
        <div onClick={removeItemHandler} className="button buttonOutline buttonCircle">
          <RemoveSVG/>
        </div>
      </div>
    </div>
  );
};
