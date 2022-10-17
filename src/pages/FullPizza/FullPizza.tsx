import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useNavigate, useParams} from "react-router-dom";

import styles from './FullPizza.module.scss'
import {FetchOnePizzaTC} from "../../redux/pizza/pizzaSlice";
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {Comments} from "../../components/Comments/Comments";

const typesName = ['тонкое', "традиционное"]

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const {item} = useAppSelector(state => state.pizza)
  const dispatch = useDispatch<AppDispatchType>()
  const {id} = useParams()


  const navigate = useNavigate()
  const addedCount = item ? item.count : 0

  const onClickAdd = () => {
    const itemCart: CartItemType = {
      id: item!.id,
      count: 0,
      type: typesName[activeType],
      size: item!.sizes[activeSize],
      price: item!.price,
      imageUrl: item!.imageUrl,
      title: item!.title,
    }
    dispatch(addItem(itemCart))
  }


  useEffect(() => {
    dispatch(FetchOnePizzaTC(id!))
  }, [])


  if (!item) {
    return <>Loading...</>
  }

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src={item.imageUrl} className={styles.image} alt=""/>
        </div>
        <div className={styles.foodConfigBlock} style={{position: "relative",}}>
          <div>
            <h2>{item.title}</h2>
            <h4>{item.price} ₽, {typesName[activeType]}, {item.sizes[activeSize]} см.</h4>
            <div style={{width: '280px', textAlign: "center", marginTop: "10px"}} className="pizzaBlockSelector">
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
            </div>
          </div>
          <div className="pizzaBlockBottom" style={{position: 'absolute', bottom: '30px'}}>
            <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
              <span>Добавить в корзину за {item.price} ₽</span>
              {item.count > 0 && <i>{item.count}</i>}
            </button>
          </div>
        </div>
      </div>
      <Comments foodId={id} />

    </div>
  );
};
