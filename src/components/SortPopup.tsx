import {FC, memo, useEffect, useRef, useState} from "react";
import {sortPropertyEnum} from "../redux/pizza/pizzaSlice";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../redux/store";
import {setSort} from "../redux/filter/filterSlice";

type SortPopupPropsType = {
  sort: SortListType
}

export type SortListType = {
  name: string
  sortProperty: sortPropertyEnum
}

export const sortList: SortListType[] = [
  {name: "популярности (DESC)", sortProperty: sortPropertyEnum.RATING_DESC},
  {name: "популярности (ASC)", sortProperty: sortPropertyEnum.RATING_ASC},
  {name: "цене (DESC)", sortProperty: sortPropertyEnum.PRICE_DESC},
  {name: "цене (ASC)", sortProperty: sortPropertyEnum.PRICE_ASC},
  {name: "алфавиту (DESC)", sortProperty: sortPropertyEnum.TITLE_DESC},
  {name: "алфавиту (ASC)", sortProperty: sortPropertyEnum.TITLE_ASC},
  {name: "просмотрам (DESC)", sortProperty: sortPropertyEnum.VIEWS_DESC},
  {name: "просмотрам (ASC)", sortProperty: sortPropertyEnum.VIEWS_ASC},
  {name: "понравившимся (DESC)", sortProperty: sortPropertyEnum.FAVORITES_DESC},
  {name: "понравившимся (ASC)", sortProperty: sortPropertyEnum.FAVORITES_ASC},
]

export const SortPopup: FC<SortPopupPropsType> = memo(({sort}) => {
  const dispatch = useDispatch<AppDispatchType>()
  const [visible, setVisible] = useState<boolean>(false)
  const sortRef = useRef(null)

  const onClickCategory = (sortType: SortListType) => {
    setVisible(false)
    dispatch(setSort(sortType))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setVisible(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.addEventListener('click', handleClickOutside)
    }
  }, [])

   return (
      <div ref={sortRef} className="sort">
         <div className="sortLabel">
            <svg className={visible ? 'svgActive' : ''}
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={() => setVisible(!visible)}>{sort.name}</span>
         </div>
        {visible && <div className="sortPopup">
            <ul>
              {sortList.map((obj, index) => (
                <li key={index}
                    onClick={() => onClickCategory(obj)}
                    className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
        </div>}


      </div>
   );
})