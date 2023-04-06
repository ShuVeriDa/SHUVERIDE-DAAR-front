import {ChangeEvent, FC} from 'react';

import styles from './Register.module.scss';
import {Input} from "../Input/Input";
import {StatusEnum} from "../../redux/types";
import {validEmail} from "../../utils/regex";
import {FormState, UseFormRegister} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../redux/store";

interface IRegisterProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
  status: StatusEnum
  onSelectType: (type: 'login' | 'register') => void
  handleChangeImage: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Register: FC<IRegisterProps> = (
  {
    register,
    isPasswordRequired = false,
    formState: {errors},
    status,
    onSelectType,
    handleChangeImage
  }) => {

  const dispatch = useDispatch<AppDispatchType>()

  return (
    <div>
      <h2 className={styles.title}>Регистрация</h2>
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
      <Input {...register('nickName', {
          required: "Nickname is required", minLength: {
            value: 3, message: "Min length should more 3 symbols"
          }
        }
      )}
             title={'Nickname'}
             type={'nickName'}
             error={errors.nickName}
      />
      <span>Выберите тип учетной записи: </span>
      <select {...register('isAdmin')}>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <div>
        <input type="file" {...register('avatar', { required: true })} onChange={handleChangeImage}/>
        {/*<Input {...register('avatar')} title={'Photo'} type={'avatar'}/>*/}
      </div>
    </div>
  );
};