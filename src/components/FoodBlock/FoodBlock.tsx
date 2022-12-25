import {FC, useState} from 'react';

import {Link, NavLink, useNavigate} from "react-router-dom";
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {selectCartItemById} from "../../redux/cart/cartSelector";
import {FoodResponseType} from "../../api/types";
import {AddButtonSVG, EditFoodSVG, RemoveFoodSVG} from "../SvgComponent";
import {FoodConfig} from "../FoodConfig/FoodConfig";

import styles from './FoodBlock.module.scss';
import cn from "classnames";
import {RemoveFoodTC} from "../../redux/food/food.actions";

const typesName = ['тонкое', "традиционное"]

export type FoodBlockPropsType = {}

export const FoodBlock: FC<FoodBlockPropsType & FoodResponseType> = (
  {
    title, price, types, id, sizes, imageUrl, liters, views, favorites, rating,
  }) => {
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.user)
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
      size: !liters ? sizes![activeSize] : undefined,
      price,
      imageUrl,
      title,
      liter: liters
    }
    dispatch(addItem(item))
  }

  const onClickRemoveFood = () => {
    if (window.confirm('Вы действительно хотите удалить ?')) {
      dispatch(RemoveFoodTC(id))
    }
  }
  const image = imageUrl.includes('uploads') ? process.env.REACT_APP_URL + imageUrl.replace('/uploads', 'uploads') : imageUrl

  return (
    <div className='pizzaBlockWrapper'>
      <div className={cn(styles.foodContainer, "pizzaBlock")}>
        {user?.isAdmin && <div className={styles.UDFood}>
          <NavLink to={`update/${id}`}>
            <EditFoodSVG styles={styles.editFood}/>
          </NavLink>
          <RemoveFoodSVG onClick={onClickRemoveFood} styles={styles.removeFood}/>
        </div>

        }

        <Link to={`/food/${id}`}>
          <img className="pizzaBlockImage"
               src={image}
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
                    id={id}
        />
        <div className="pizzaBlockBottom">
          <div className="pizzaBlockPrice">от {price} ₽</div>
          <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
            <AddButtonSVG/>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};