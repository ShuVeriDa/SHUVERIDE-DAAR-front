import {ChangeEvent, FC, forwardRef, InputHTMLAttributes} from 'react';

import styles from './Input.module.scss';
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";
import cn from "classnames";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  value?: number | string
  step?: string
  classes?: string
  onChangeSome?: (title: any) => void
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

    return (
      <div className={cn(styles.input, classes)}>
        <input type={type} ref={ref} value={value} {...rest} onChange={onChangeHandler} step={step}/>
        <label>{title}</label>
        {error && error.type && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })

Input.displayName = 'Input'