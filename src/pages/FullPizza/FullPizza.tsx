import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {Link, useNavigate, useParams} from "react-router-dom";
import {pizzaAPI, PizzaResponseType} from "../../api/pizzaAPI";

import styles from './FullPizza.module.scss'
import {FetchOnePizzaTC} from "../../redux/pizza/pizzaSlice";

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
  const {item} = useAppSelector(state => state.pizza)
   const dispatch = useDispatch<AppDispatchType>()
   const {id} = useParams()
   const navigate = useNavigate()


  useEffect(() => {
    dispatch(FetchOnePizzaTC(id!))
  }, [])


   if (!item) {
      return <>Loading...</>
   }

   return (
      <div className='container'>
         <img src={item.imageUrl} className={styles.image} alt=""/>
         <h2>{item.title}</h2>
         <h4>{item.price} ₽</h4>
         <Link to='/notfound'>
            <button className="button buttonOutline buttonAdd">
               <span>Назад</span>
            </button>
         </Link>
      </div>
   );
};
