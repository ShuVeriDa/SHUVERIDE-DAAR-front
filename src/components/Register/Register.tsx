import {FC} from 'react';

import styles from './Register.module.scss';
import {Input} from "../Input/Input";
import {SubmitButton} from "../Buttons/SubmitButton/SubmitButton";

interface IRegisterProps {
}

export const Register: FC<IRegisterProps> = () => {
  return (
    <div>
      <h2 className={styles.title}>Регистрация</h2>
      <Input title={'Email'} type={'email'}/>
      <Input title={'Password'} type={'password'}/>
      <Input title={'Nickname'} type={'text'}/>
      <span>Выберите тип учетной записи: </span>
        <select>
          <option value="0">Admin</option>
          <option value="1">User</option>
        </select>
      <div>
        <input type="file" accept='image/*'/>
      </div>
      <SubmitButton title={"Зарегистрироватся"}/>

    </div>
  );
};