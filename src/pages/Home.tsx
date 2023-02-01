import React, {FC, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import qs from "qs";

import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {Pagination} from "../components/Pagination/Pagination";
import {FoodBlock} from "../components/FoodBlock/FoodBlock";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {Skeleton} from "../components/FoodBlock/Skeleton";
import {setCategoryId, setCurrentPage} from "../redux/filter/filterSlice";
import {FoodContent} from "../components/FoodContent";
import {FetchFoodsTC} from "../redux/food/food.actions";


type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const {foods, status} = useAppSelector(state => state.food)
  const {categoryId, sort, searchValue, currentPage} = useAppSelector(state => state.filter)

  const navigate = useNavigate()
  const isMounted = useRef(false)

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sort.sortProperty.replace("-", '')
    const order = sort.sortProperty.includes('-') ? 'ASC' : 'DESC'
    const search = searchValue ? `title=${searchValue}` : ''
    const kind = categoryId > 0 ? '0' : ''

    dispatch(FetchFoodsTC({
      title: search,
      kind: kind,
      category: category,
      sortBy: sortBy,
      order: order,
      limit: '',
      take: ''
    }))
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
  }, [categoryId, sort.sortProperty, searchValue])

  const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  const skeleton = array.map((_, index) => <Skeleton key={index}/>)

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
      <FoodContent food={pizzas} status={status} title={'пиццы'} skeleton={skeleton}/>
      <FoodContent food={drinks} status={status} title={'напитки'} skeleton={skeleton}/>
      <Pagination currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
    </div>
  );
};
