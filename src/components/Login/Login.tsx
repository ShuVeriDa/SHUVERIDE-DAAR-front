import {FC} from 'react';

import styles from './Login.module.scss';
import {Input} from "../Input/Input";
import {SubmitButton} from "../Buttons/SubmitButton/SubmitButton";
import {FormState, UseFormRegister} from "react-hook-form";
import {validEmail} from "../../utils/regex";
import {StatusEnum} from "../../redux/types";

interface ILoginProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
  status: StatusEnum
}

export const Login: FC<ILoginProps> = ({register, isPasswordRequired = false, formState: {errors}, status}) => {
  return (
    <div>
      <h2 className={styles.title}>Авторизация</h2>
      <Input {...register('email', {
          required: "Email is required", pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        }
      )}
             title={'Email'}
             type={'email'}
             error={errors.email}
      />
      <Input {...register('password', isPasswordRequired ? {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Min length should more 6 symbols"
          }
        } : {}
      )}
             title={'Password'}
             type={'password'}
             error={errors.password}
      />
      <SubmitButton status={status} title={"Авторизоваться"}/>
      {/*<SubmitButton status={status} title={"Регистрация"}/>*/}
    </div>
  );
};