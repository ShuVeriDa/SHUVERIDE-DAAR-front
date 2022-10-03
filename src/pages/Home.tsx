import React, {FC, useEffect} from "react";

import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {Pagination} from "../components/Pagination/Pagination";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {useDispatch} from "react-redux";
import {FetchPizzaTC} from "../redux/pizza/pizzaSlice";
import {AppDispatchType, useAppSelector} from "../redux/store";

type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const {items} = useAppSelector(state => state.pizza)

  useEffect(() => {
      dispatch(FetchPizzaTC())
  } , [])

   return (
      <div className='container'>
         <div className="contentTop">
            <Categories/>
            <SortPopup/>
         </div>
         <h2 className="contentTitle">Все пиццы</h2>
        {
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        }
         <Pagination />
      </div>
   );
};
