import {ChangeEvent, FC} from 'react';
import {FormState, UseFormRegister} from "react-hook-form";

interface ICheckboxProps {
  title: string
  name: string | string[] | number[],
  type: 'sizes' | 'types',
  options: number[],
  register: UseFormRegister<any>
  formState?: FormState<any>
  onChangeSome?: (el: any) => void
  value?: number[] | undefined
}

export const Checkbox: FC<ICheckboxProps> = (
  {
    register,
    name, options, type, title, formState, value, onChangeSome
  }
) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeSome) {
      onChangeSome(e.currentTarget.value)
    }
  }

  console.log(value)

  return (
    <div>
      <span>{title} </span>
      <ul>
        {options.map((obj, i) => <li key={i}>
          <span>{name[i]}</span>
          <input {...register(type)} type={'checkbox'} onChange={onChangeHandler} checked={value?.includes(obj)}  value={obj}/>
        </li>)}
      </ul>
    </div>
  );
};