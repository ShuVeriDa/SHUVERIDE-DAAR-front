import {FC} from 'react';
import styles from './Checkbox.module.scss';
import {FormState, UseFormRegister} from "react-hook-form";

interface ICheckboxProps {
  title: string
  name: string | string[] | number[],
  type: 'sizes' | 'types',
  options: number[],
  register: UseFormRegister<any>
  formState?: FormState<any>
}

export const Checkbox: FC<ICheckboxProps> = (
  {
    register,
    name, options, type, title ,formState
  }
) => {
  return (
    <div>
      <span>{title} </span>
      <ul>
        {options.map((obj, i) => <li key={i}>
          <span>{name[i]}</span>
          <input {...register(type)} type={'checkbox'} value={obj}/>
        </li>)}
      </ul>
    </div>
  );
};