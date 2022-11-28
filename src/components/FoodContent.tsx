import React, {FC} from 'react';
import {FoodResponseType} from "../api/types";
import {StatusEnum} from "../redux/types";

interface IFoodContentProps {
  title: string;
  food: JSX.Element[],
  skeleton: any,
  status: StatusEnum
}

export const FoodContent: FC<IFoodContentProps> = ({title, food, status, skeleton}) => {
  return (
    <div>
      {food.length ? <h2 className="contentTitle">Все {title}</h2> : ''}
      {status === 'error'
        ? <div className="contentErrorInfo">
          <h2>Произошла ошибка</h2>
          <p>К сожалению, не удалось получить {title}. Попробуйте повторить попытку позже</p>
        </div>
        : <div className="contentItems">{status === 'loading' ? skeleton : food}</div>
      }
    </div>
  );
};