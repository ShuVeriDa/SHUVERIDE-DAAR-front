import {FC, useState} from 'react';

import {Link} from "react-router-dom";
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {selectCartItemById} from "../../redux/cart/cartSelector";
import {DrinksResponseType, PizzaResponseType} from "../../api/types";

const typesName = ['тонкое', "традиционное"]

export type FoodBlockPropsType = {}

export const FoodBlock: FC<FoodBlockPropsType & PizzaResponseType & DrinksResponseType> = (
  {
    title, price, types, id, sizes, imageUrl, liters
  }) => {
  const dispatch = useDispatch<AppDispatchType>()
  const cartItem = useAppSelector(selectCartItemById(id))
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {

      const item: CartItemType = {
        id,
        count: 0,
        type: !liters ? typesName[activeType] : undefined,
        size: sizes![activeSize],
        price,
        imageUrl,
        title,
        liter: liters
      }
      dispatch(addItem(item))

  }

  return (
    <div className='pizzaBlockWrapper'>
      <div className="pizzaBlock">
        <Link to={`/pizza/${id}`}>
          <img className="pizzaBlockImage"
               src={imageUrl}
               alt="Pizza"/>
          <h4 className="pizzaBlockTitle">{title} {liters ? `${liters}л` : '' }</h4>
        </Link>

        {types?.length && sizes?.length  ? <div className="pizzaBlockSelector">
            <ul>
              {types.map((type) => (
                <li key={type}
                    className={activeType === type ? 'active' : ''}
                    onClick={() => setActiveType(type)}
                >
                  {typesName[type]}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((size, i) => (
                <li key={size}
                    className={activeSize === i ? 'active' : ''}
                    onClick={() => setActiveSize(i)}
                >
                  {size} см.
                </li>
              ))}
            </ul>
        </div> : ''}

        <div className="pizzaBlockBottom">
          <div className="pizzaBlockPrice">от {price} ₽</div>
          <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};