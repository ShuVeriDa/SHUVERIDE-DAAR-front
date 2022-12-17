import {ChangeEvent, FC} from 'react';

import styles from './Select.module.scss';
import {FormState, UseFormRegister} from "react-hook-form";

interface ISelectProps {
  title: string
  type: string,
  options: string[],
  register: UseFormRegister<any>
  formState?: FormState<any>
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<ISelectProps> = ({register, type, onChange, options, title, formState}) => {
  return (
    <div>
      <span>{title}</span>
      <select {...register(type)} onChange={onChange}>
        {options.map((obj, i) => <option key={i} value={i}>{obj}</option>)}
      </select>
    </div>
  );
};