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
import {Select} from "../../components/Select/Select";
import {foodCategories, foodNameTypes, foodOptions, foodValueSizes, foodValueTypes} from "../../utils/helpers";
import {Checkbox} from "../../components/Checkbox/Checkbox";
import {HandleChangeImage} from "../../utils/HandleChangeImage";

interface IAuthProps {
}

export const CreateFood: FC<IAuthProps> = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [kindFood, setKindFood] = useState('0')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatchType>()

  const {register, handleSubmit, formState, reset} = useForm<CreateFoodType>({mode: "onChange"})

  const onSubmit: SubmitHandler<CreateFoodType> = (data) => {
    dispatch(CreateFoodTC({
      ...data,
      imageUrl: imageUrl,
      price: Number(data.price),
      kind: Number(data.kind),
      category: Number(data.category),
      types: data.types?.map(Number),
      sizes: data.sizes?.map(Number),
      liters: Number(data.liters)
    }))

    console.log(data)

    navigate('/')
    reset()
  }

  const handleChangeImage =  (e: ChangeEvent<HTMLInputElement>) => {
    HandleChangeImage(e, setImageUrl, 'food')
  }

  const onClickKindFood = (e: ChangeEvent<HTMLSelectElement>) => {
    setKindFood(e.currentTarget.value)
  }

  console.log(kindFood)

  return (
    <div className={styles.create}>
      <div className={styles.createContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.title}>Добавление Еды</h2>
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
                 classes={styles.price}
          />

          <input type="file" {...register('imageUrl', {required: true})} onChange={handleChangeImage}/>
          <Select title={"Выберите род еды:"} type={"kind"} options={foodOptions} register={register} onChange={onClickKindFood}/>
          <Select title={"Выберите категорию:"} type={"category"} options={foodCategories} register={register} />
          {kindFood === '0' ?
            <>
              <Checkbox title={'Выберите тип пиццы:'} name={foodNameTypes} type={'types'} options={foodValueTypes} register={register} />
              <Checkbox title={'Выберите размер пиццы: '} name={foodValueSizes} type={'sizes'} options={foodValueSizes} register={register} />
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