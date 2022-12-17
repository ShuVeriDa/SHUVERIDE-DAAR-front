import {FC, forwardRef, InputHTMLAttributes} from 'react';

import styles from './Input.module.scss';
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";
import cn from "classnames";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  value?: number
  step?: string
  classes?: string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(
  (
    {
      type, title, style, error,
      value, step, classes, ...rest
    }, ref
  ) => {
    return (
      <div className={cn(styles.input, classes)}>
        <input type={type} ref={ref} value={value} {...rest} step={step}/>
        <label>{title}</label>
        {error && error.type && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })

Input.displayName = 'Input'