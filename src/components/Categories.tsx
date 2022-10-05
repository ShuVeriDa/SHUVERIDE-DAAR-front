import {FC, memo} from "react";


interface CategoriesPropsType {
  categoryId: number
  onClickCategoryId: (categoryId: number) => void
}

export const Categories: FC<CategoriesPropsType> = memo(({categoryId, onClickCategoryId}) => {
  const categories = ['Все', "Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return <li key={index}
                     onClick={() => onClickCategoryId(index)}
                     className={categoryId === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        })}
      </ul>
    </div>
  )
})