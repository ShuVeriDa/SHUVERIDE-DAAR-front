import {FC} from 'react';

import styles from './Register.module.scss';
import {Input} from "../Input/Input";
import {SubmitButton} from "../Buttons/SubmitButton/SubmitButton";
import {StatusEnum} from "../../redux/types";

interface IRegisterProps {
  status: StatusEnum
}

export const Register: FC<IRegisterProps> = ({status}) => {
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
      {/*<SubmitButton status={status} title={"Зарегистрироватся"}/>*/}

    </div>
  );
};