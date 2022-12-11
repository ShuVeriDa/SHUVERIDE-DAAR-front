import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useParams} from "react-router-dom";

import styles from './FullPizza.module.scss'
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {Comments} from "../../components/Comments/Comments";
import {FoodConfig} from "../../components/FoodConfig/FoodConfig";
import {FetchOneFoodTC} from "../../redux/food/food.actions";

const typesName = ['тонкое', "традиционное"]

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const {food} = useAppSelector(state => state.food)
  const dispatch = useDispatch<AppDispatchType>()
  const {id} = useParams()

  // const food = item ? item : drink

  const onClickAdd = () => {
    const itemCart: CartItemType = {
      id: food!.id,
      count: 0,
      type: !food?.liters ? typesName[activeType] : undefined,
      size: food?.sizes ? food.sizes[activeSize] : undefined,
      price: food!.price,
      imageUrl: food!.imageUrl,
      title: food!.title,
      liter: food?.liters ? food.liters : undefined
    }
    dispatch(addItem(itemCart))
  }

  console.log(food)


  useEffect(() => {
    dispatch(FetchOneFoodTC(id!))
  }, [])


  if (!food) {
    return <>Loading...</>
  }

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src={food.imageUrl} className={styles.image} alt=""/>
        </div>
        <div className={styles.foodConfigBlock} style={{position: "relative",}}>
          <div className={styles.foodConfigBlockContainer}>
            <div className={styles.foodConfigInfo}>
              <h2>{food.title}</h2>
              <h4>{food.price} ₽, {food?.liters ? `${food?.liters} л.` :
                <span>{typesName[activeType]}, {food?.sizes![activeSize]} см.</span>}
              </h4>
            </div>
            <FoodConfig types={food.types}
                        activeType={activeType}
                        activeSize={activeSize}
                        setActiveType={setActiveType}
                        setActiveSize={setActiveSize}
                        typesName={typesName}
                        sizes={food.sizes}
                        favorites={food.favorites}
                        views={food.views}
            />
          </div>

          <div className="pizzaBlockBottom" style={{position: 'absolute', bottom: '30px'}}>
            <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
              <span>Добавить в корзину за {food.price} ₽</span>
              {food.count > 0 && <i>{food.count}</i>}
            </button>
          </div>
        </div>
      </div>
      <Comments foodId={id!}/>

    </div>
  );
};
