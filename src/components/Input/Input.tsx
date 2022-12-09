import {FC, forwardRef, InputHTMLAttributes} from 'react';

import styles from './Input.module.scss';
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(({type, title, style, error, ...rest}, ref) => {
  return (
    <div className={styles.input}>
      <input type={type} ref={ref} {...rest}/>
      <label>{title}</label>
      {error && error.type && <div className={styles.error}>{error.message}</div>}
    </div>
  );
})

Input.displayName = 'Input'