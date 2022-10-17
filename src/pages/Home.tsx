import React, {FC, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import qs from "qs";

import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {Pagination} from "../components/Pagination/Pagination";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {FetchPizzasTC} from "../redux/pizza/pizzaSlice";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {setCategoryId, setCurrentPage} from "../redux/filter/filterSlice";
import {drinksAPI, DrinksResponseType} from "../api/drinksAPI";


type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const {items, status} = useAppSelector(state => state.pizza)
  const [drinks, setDrinks] = useState<DrinksResponseType[]>([])
  const {categoryId, sort, searchValue, currentPage} = useAppSelector(state => state.filter)

  const navigate = useNavigate()
  const isMounted = useRef(false)

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sort.sortProperty.replace("-", '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `search=${searchValue}` : ''

    dispatch(FetchPizzasTC({currentPage, category, sortBy, order, search}))
  }

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true
  }, [categoryId, sort.sortProperty])


// Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    getPizzas()

    const fetchDrinks = async () => {
      try {
        const res = await drinksAPI.getDrinks()
        setDrinks(res.data)
      } catch (error) {
        console.warn(error)
      }
    }

    fetchDrinks()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  console.log(drinks)

  const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  const skeleton = array.map((_, index) => <Skeleton key={index}/>)
  const pizzas = items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock key={obj.id}  {...obj}/>)

  const onClickCategoryId = (categoryId: number) => {
    dispatch(setCategoryId(categoryId))
  }

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  console.log(items)

  return (
    <div className='container'>
      <div className="contentTop">
        <Categories categoryId={categoryId} onClickCategoryId={onClickCategoryId}/>
        <SortPopup sort={sort}/>
      </div>
      <h2 className="contentTitle">Все пиццы</h2>
      {status === 'error'
        ? <div className="contentErrorInfo">
          <h2>Произошла ошибка</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
        : <div className="contentItems">{status === 'loading' ? skeleton : pizzas}</div>
      }
      <Pagination currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
    </div>
  );
};
