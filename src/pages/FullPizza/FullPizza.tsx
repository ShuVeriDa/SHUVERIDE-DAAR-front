import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../redux/store";
import {Link, useNavigate, useParams} from "react-router-dom";
import {pizzaAPI, PizzaResponseType} from "../../api/pizzaAPI";

import styles from './FullPizza.module.scss'

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
   const [pizza, setPizza] = useState<PizzaResponseType>()
   const dispatch = useDispatch<AppDispatchType>()
   const {id} = useParams()
   const navigate = useNavigate()

   useEffect(() => {
         const pizzas = async () => {
            try {
               const res = await pizzaAPI.getOnePizza(id!)
               setPizza(res.data)
            } catch (error) {
               alert("Ошибка при получении пиццы")
               navigate('/')
            }
         }

         pizzas()
   }, [])


   if (!pizza) {
      return <>Loading...</>
   }

   return (
      <div className='container'>
         <img src={pizza.imageUrl} className={styles.image} alt=""/>
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
         <Link to='/notfound'>
            <button className="button buttonOutline buttonAdd">
               <span>Назад</span>
            </button>
         </Link>
      </div>
   );
};
