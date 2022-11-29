import {FC, useState} from 'react';

import {Link} from "react-router-dom";
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {selectCartItemById} from "../../redux/cart/cartSelector";
import {FoodResponseType} from "../../api/types";

import styles from './FoodBlock.module.scss';
import {AddButtonSVG, FavoriteSVG, ViewsSVG} from "../SvgComponent";
import {FoodConfig} from "../FoodConfig/FoodConfig";

const typesName = ['тонкое', "традиционное"]

export type FoodBlockPropsType = {}

export const FoodBlock: FC<FoodBlockPropsType & FoodResponseType> = (
  {
    title, price, types, id, sizes, imageUrl, liters, views, favorites, rating,
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
        <Link to={`/food/${id}`}>
          <img className="pizzaBlockImage"
               src={imageUrl}
               alt="Pizza"

          />
          <h4 className="pizzaBlockTitle">{title} {liters ? `${liters}л` : null}</h4>
        </Link>
        <FoodConfig types={types}
                    activeType={activeType}
                    activeSize={activeSize}
                    setActiveType={setActiveType}
                    setActiveSize={setActiveSize}
                    typesName={typesName}
                    sizes={sizes}
                    favorites={favorites}
                    views={views}
                    />
        <div className="pizzaBlockBottom">
          <div className="pizzaBlockPrice">от {price} ₽</div>
          <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
           <AddButtonSVG />
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};