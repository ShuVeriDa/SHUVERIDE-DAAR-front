import {ChangeEvent, FC, useState} from 'react';

import styles from './UpdateFood.module.scss';
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useDispatch} from "react-redux";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {CreateFoodType} from "../../api/types";
import {UpdateFoodTC} from "../../redux/food/food.actions";
import {Input} from "../../components/Input/Input";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import {Select} from "../../components/Select/Select";
import {foodCategories, foodNameTypes, foodOptions, foodValueSizes, foodValueTypes} from "../../utils/helpers";
import {Checkbox} from "../../components/Checkbox/Checkbox";
import {HandleChangeImage} from "../../utils/HandleChangeImage";

interface IAuthProps {
}

export const UpdateFood: FC<IAuthProps> = () => {

  const {id} = useParams()
  const {foods} = useAppSelector(state => state.food)
  const currentFood = foods.find(obj => obj.id === id)

  const [imageUrl, setImageUrl] = useState('')
  const [titleFood, setTitleFood] = useState<string | undefined>(currentFood?.title)
  const [price, setPrice] = useState<number | undefined>(currentFood?.price)
  const [kindFood, setKindFood] = useState(currentFood?.kind.toString())
  const [literDrink, setLiterDrink] = useState<number | undefined | null>(currentFood?.liters)
  const [categoryFood, setCategoryFood] = useState<string | undefined >(currentFood?.category.toString())
  const [typeFood, setTypeFood] = useState<number[] | undefined | null>(currentFood?.types)
  const [sizeFood, setSizeFood] = useState<number[] | undefined | null>(currentFood?.sizes)

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatchType>()

  console.log(currentFood, price, titleFood, "currentFood")

  const {register, handleSubmit, formState, reset} = useForm<CreateFoodType>({mode: "onChange"})

  const onSubmit: SubmitHandler<CreateFoodType> = (data) => {
    dispatch(UpdateFoodTC({
      id: id!,
      data: {
        ...data,
        title: titleFood!,
        imageUrl: imageUrl,
        price: Number(price),
        kind: Number(kindFood),
        category: Number(data.category),
        types: data.types?.map(Number),
        sizes: data.sizes?.map(Number),
        liters: Number(literDrink)
      }
    }))

    console.log(data)

    navigate('/')
    reset()
  }

  const onClickKindFood = (e: ChangeEvent<HTMLSelectElement>) => {
    setKindFood(e.currentTarget.value)
  }

  const onClickCategoryFood = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryFood(e.currentTarget.value)
  }

  const handleChangeImage =  (e: ChangeEvent<HTMLInputElement>) => {
    HandleChangeImage(e, setImageUrl, 'food')
  }

  console.log(kindFood)

  return (
    <div className={styles.create}>
      <div className={styles.createContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.title}>Редактирование Еды</h2>
          <Input {...register('title', {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Min length should more 3 symbols"
            }
          })}
                 value={titleFood}
                 onChangeSome={setTitleFood}
                 title={'Название'}
                 type={'text'}
                 error={formState.errors.title}

          />
          <Input {...register('price')}
                 title={'Цена'}
                 type={'number'}
                 value={price}
                 onChangeSome={setPrice}
                 error={formState.errors.price}
                 classes={styles.price}
          />

          <input type="file" {...register('imageUrl', {required: true})} onChange={handleChangeImage}/>

          <Select title={"Выберите род еды:"}
                  type={"kind"}
                  value={kindFood}
                  options={foodOptions}
                  register={register}
                  onChange={onClickKindFood}
          />
          <Select title={"Выберите категорию:"}
                  type={"category"}
                  value={categoryFood}
                  onChange={onClickCategoryFood}
                  options={foodCategories}
                  register={register}
          />
          {kindFood === '0' ?
            <>
              <Checkbox title={'Выберите тип пиццы:'}
                        name={foodNameTypes}
                        type={'types'}
                        options={foodValueTypes}
                        register={register}
                        // value={typeFood!}
                        // onChangeSome={setTypeFood}
              />
              <Checkbox title={'Выберите размер пиццы: '}
                        name={foodValueSizes}
                        type={'sizes'}
                        options={foodValueSizes}
                        register={register}
                        // value={sizeFood!}
                        // onChangeSome={setSizeFood}

              />
            </>
            : <>
              <Input {...register('liters')}
                     onChangeSome={setLiterDrink}
                     value={literDrink!}
                     title={'Литр'}
                     type={'number'}
                     step={"any"}
              />
            </>
          }

          <div className={styles.buttons}>
            <SubmitButton title={"Добавить"}
            />
          </div>
        </form>
      </div>

    </div>
  );
};