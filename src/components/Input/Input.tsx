import {FC, forwardRef, InputHTMLAttributes} from 'react';

import styles from './Input.module.scss';
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  value?: number
  step?: string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(({type, title, style, error, value, step, ...rest}, ref) => {
  return (
    <div className={styles.input}>
      <input type={type} ref={ref} value={value} {...rest} step={step}/>
      <label>{title}</label>
      {error && error.type && <div className={styles.error}>{error.message}</div>}
    </div>
  );
})

Input.displayName = 'Input'