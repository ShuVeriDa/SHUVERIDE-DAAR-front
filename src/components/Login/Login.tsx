import {FC} from 'react';

import styles from './Login.module.scss';
import {Input} from "../Input/Input";
import {SubmitButton} from "../Buttons/SubmitButton/SubmitButton";

interface ILoginProps {
}

export const Login: FC<ILoginProps> = () => {
  return (
    <div>
      <h2 className={styles.title}>Авторизация</h2>
      <Input title={'Email'} type={'email'}/>
      <Input title={'Password'} type={'password'}/>
      <SubmitButton title={"Авторизоваться"}/>
    </div>
  );
};