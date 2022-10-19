import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useNavigate, useParams} from "react-router-dom";

import styles from './FullPizza.module.scss'
import {FetchOnePizzaTC} from "../../redux/pizza/pizzaSlice";
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {Comments} from "../../components/Comments/Comments";
import {drinksAPI} from "../../api/drinksAPI";
import {DrinksResponseType} from "../../api/types";
import {FetchOneDrinkTC} from "../../redux/drinks/drinksSlice";

const typesName = ['тонкое', "традиционное"]

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const {item} = useAppSelector(state => state.pizza)
  const {drink} = useAppSelector(state => state.drink)
  const dispatch = useDispatch<AppDispatchType>()
  const {id} = useParams()

  const food = item ? item : drink

  const onClickAdd = () => {
    const itemCart: CartItemType = {
      id: food!.id,
      count: 0,
      type: !drink?.liters ? typesName[activeType] : undefined,
      size: item?.sizes![activeSize],
      price: food!.price,
      imageUrl: food!.imageUrl,
      title: food!.title,
      liter: drink?.liters
    }
    dispatch(addItem(itemCart))
  }


  useEffect(() => {
    dispatch(FetchOnePizzaTC(id!))
    dispatch(FetchOneDrinkTC(id!))
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
          <div>
            <h2>{food.title}</h2>
            <h4>{food.price} ₽, {drink?.liters ? `${drink?.liters} л.` :  <span>{typesName[activeType]},
            {item?.sizes![activeSize]} см.</span>}

            </h4>
            {item?.types?.length && item.sizes?.length
              ? <div style={{width: '280px', textAlign: "center", marginTop: "10px"}} className="pizzaBlockSelector">
                <ul>
                  {item.types.map((type) => (
                    <li key={type}
                        className={activeType === type ? 'active' : ''}
                        onClick={() => setActiveType(type)}
                    >
                      {typesName[type]}
                    </li>
                  ))}
                </ul>
                <ul>
                  {item.sizes.map((size, i) => (
                    <li key={size}
                        className={activeSize === i ? 'active' : ''}
                        onClick={() => setActiveSize(i)}
                    >
                      {size} см.
                    </li>
                  ))}
                </ul>
              </div> : ''}
          </div>

          <div className="pizzaBlockBottom" style={{position: 'absolute', bottom: '30px'}}>
            <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
              <span>Добавить в корзину за {food.price} ₽</span>
              {food.count > 0 && <i>{food.count}</i>}
            </button>
          </div>
        </div>
      </div>
      <Comments foodId={id}/>

    </div>
  );
};
