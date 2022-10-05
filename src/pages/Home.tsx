import React, {FC, useEffect, useRef} from "react";

import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {Pagination} from "../components/Pagination/Pagination";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {useDispatch} from "react-redux";
import {FetchPizzasTC} from "../redux/pizza/pizzaSlice";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {setCategoryId, setFilters} from "../redux/filter/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import {SearchPizzasParamsType} from "../api/pizzaAPI";

type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const {items, status} = useAppSelector(state => state.pizza)
  const {categoryId} = useAppSelector(state => state.filter)
  const isMounted = useRef(false)
  const navigate = useNavigate()


  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    dispatch(FetchPizzasTC({category}))
  }

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       categoryId
  //     })
  //
  //     navigate(`?${queryString}`)
  //   }
  //
  //   isMounted.current = true
  // }, [categoryId])
  //
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1) as unknown as SearchPizzasParamsType)
  //
  //     dispatch(setFilters({
  //       categoryId: Number(params.category)
  //     }))
  //   }
  // }, [])

  useEffect(() => {
    getPizzas()
  }, [categoryId])

  const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  const skeleton = array.map((_, index) => <Skeleton key={index}/>)
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id}  {...obj}/>)

  const onClickCategoryId = (categoryId: number) => {
    dispatch(setCategoryId(categoryId))
  }
  return (
    <div className='container'>
      <div className="contentTop">
        <Categories categoryId={categoryId} onClickCategoryId={onClickCategoryId}/>
        <SortPopup/>
      </div>
      <h2 className="contentTitle">Все пиццы</h2>
      {status === 'error'
        ? <div className="contentErrorInfo">
          <h2>Произошла ошибка</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
        : <div className="contentItems">{status === 'loading' ? skeleton : pizzas}</div>
      }
      <Pagination/>
    </div>
  );
};
