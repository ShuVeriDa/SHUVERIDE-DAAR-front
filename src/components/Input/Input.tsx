import {ChangeEvent, forwardRef, InputHTMLAttributes} from 'react';

import styles from './Input.module.scss';
import {FieldError} from "react-hook-form";
import cn from "classnames";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  step?: string
  classes?: string
  onChangeSome?: (el: any) => void
  value?: number | string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(
  (
    {
      type, title, style, error,
      value, step, classes, onChangeSome, ...rest
    }, ref
  ) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeSome) {
        onChangeSome(e.currentTarget.value)
      }
    }

    console.log(value)

    return (
      <div className={cn(styles.input, classes)}>
        <input className={cn(value ? styles.isValue : '')} type={type} ref={ref} value={value} {...rest} onChange={onChangeHandler} step={step}/>
        <label>{title}</label>
        {error && error.type && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })

Input.displayName = 'Input'