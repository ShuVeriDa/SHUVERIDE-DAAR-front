import {ChangeEvent, FC, useState} from 'react';

import styles from './CreateFood.module.scss';
import {AppDispatchType} from "../../redux/store";
import {useDispatch} from "react-redux";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {CreateFoodType} from "../../api/types";
import {CreateFoodTC} from "../../redux/food/food.actions";
import {Input} from "../../components/Input/Input";
import {useNavigate} from "react-router-dom";

interface IAuthProps {
}

export const CreateFood: FC<IAuthProps> = () => {
  const [kindFood, setKindFood] = useState('0')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatchType>()

  const {register, handleSubmit, formState, reset} = useForm<CreateFoodType>({mode: "onChange"})

  const onSubmit: SubmitHandler<CreateFoodType> = (data) => {
    dispatch(CreateFoodTC({
      ...data,
      imageUrl: 'https://pictures1.apteka-april.ru/products/232513/800/cd24c0d394a08e99506bc17796cc050b.webp',
      price: Number(data.price),
      kind: Number(data.kind),
      category: Number(data.category),
      types: data.types?.map(Number),
      sizes: data.sizes?.map(Number),
      liters: Number(data.liters)
    }))

    navigate('/')
    reset()
  }

  const onClickKindFood = (e: ChangeEvent<HTMLSelectElement>) => {
    setKindFood(e.currentTarget.value)
  }

  console.log(kindFood)

  return (
    <div className={styles.create}>
      <div className={styles.createContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Добавление Еды</h2>
          <Input {...register('title', {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Min length should more 3 symbols"
            }
          })}
                 title={'Название'}
                 type={'text'}
                 error={formState.errors.title}
          />
          <Input {...register('price')}
                 title={'Цена'}
                 type={'number'}
                 error={formState.errors.price}
          />
          <div>
            <span>Выберите род еды: </span>
            <select {...register('kind')} onChange={onClickKindFood}>
              <option value={0}>Пицца</option>
              <option value={1}>Напитки</option>
            </select>
          </div>
          <div>
            <span>Выберите категорию: </span>
            <select {...register('category')}>
              <option value={0}>Все</option>
              <option value={1}>Мясные</option>
              <option value={2}>Вегетерианские</option>
              <option value={3}>Гриль</option>
              <option value={4}>Острые</option>
              <option value={5}>Закрытые</option>
            </select>
          </div>
          {kindFood === '0' ?
            <>
              <div>
                <span>Выберите тип пиццы: </span>
                <ul>
                  <li>
                    <span>Традиционное</span>
                    <input {...register('types')} type={'checkbox'} value={0}/>
                  </li>
                  <li>
                    <span>Тонкое</span>
                    <input {...register('types')} type={'checkbox'} value={1}/>
                  </li>
                </ul>
              </div>
              <div>
                <span>Выберите размер пиццы: </span>
                <ul>
                  <li>
                    <span>26</span>
                    <input {...register('sizes')} type={'checkbox'} value={26}/>
                  </li>
                  <li>
                    <span>30</span>
                    <input {...register('sizes')} type={'checkbox'} value={30}/>
                  </li>
                  <li>
                    <span>40</span>
                    <input {...register('sizes')} type={'checkbox'} value={40}/>
                  </li>
                </ul>
              </div>
            </>
            : <>
              <Input {...register('liters')} title={'Литр'} type={'number'} step={"any"}/>
            </>
          }

          <div className={styles.buttons}>
            <SubmitButton
              title={"Добавить"}
            />
          </div>
        </form>
      </div>

    </div>
  );
};