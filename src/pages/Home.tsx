import React, {FC, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import qs from "qs";

import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {Pagination} from "../components/Pagination/Pagination";
import {FoodBlock} from "../components/FoodBlock/FoodBlock";
import {FetchPizzasTC} from "../redux/pizza/pizzaSlice";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {Skeleton} from "../components/FoodBlock/Skeleton";
import {setCategoryId, setCurrentPage} from "../redux/filter/filterSlice";
import {FetchDrinksTC} from "../redux/drinks/drinksSlice";
import {foodAPI} from "../api/foodAPI";
import {FoodResponseType} from "../api/types";
import {FetchFoodsTC} from "../redux/food/foodSlice";


type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  // const {items} = useAppSelector(state => state.pizza)
  const {foods, status} = useAppSelector(state => state.food)
  // const {drinks} = useAppSelector(state => state.drink)
  const {categoryId, sort, searchValue, currentPage} = useAppSelector(state => state.filter)

  const navigate = useNavigate()
  const isMounted = useRef(false)

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sort.sortProperty.replace("-", '')
    const order = sort.sortProperty.includes('-') ? 'ASC' : 'DESC'
    const search = searchValue ? `search=${searchValue}` : ''
    dispatch(FetchFoodsTC({title: '', kind: '', category: categoryId, price: "DESC", rating: "DESC", views: "DESC", favorites: 'DESC', limit: '', take: ''}))
    // dispatch(FetchPizzasTC({currentPage, category, sortBy, order, search}))
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
//   useEffect(() => {
//     getPizzas()
//   }, [categoryId, sort.sortProperty, searchValue, currentPage])
//
//   useEffect(() => {
//     dispatch(FetchDrinksTC())
//   }, [])

  useEffect(() => {
    getPizzas()
  }, [categoryId])

  console.log(foods)

  const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  const skeleton = array.map((_, index) => <Skeleton key={index}/>)
  // const pizzas = items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
  //   .map((obj) => <FoodBlock key={obj.id} {...obj}/>)
  // const drinkItems = drinks.map((obj) => <FoodBlock sizes={[]} types={[]} key={obj.id} {...obj}/>)

  const pizzas = foods.filter(obj => obj.kind === 0).map((obj) => <FoodBlock key={obj.id} {...obj} />)
  const drinks = foods.filter(obj => obj.kind === 1).map((obj) => <FoodBlock key={obj.id} {...obj} />)

  const onClickCategoryId = (categoryId: number) => {
    dispatch(setCategoryId(categoryId))
  }

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }


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

      <h2 className="contentTitle">Все напитки</h2>
      {status === 'error'
        ? <div className="contentErrorInfo">
          <h2>Произошла ошибка</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
        : <div className="contentItems">{status === 'loading' ? skeleton : drinks}</div>
      }
      <Pagination currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
    </div>
  );
};
