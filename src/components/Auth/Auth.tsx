import {FC} from 'react';
import {Input} from "../Input/Input";

interface IAuthProps {
}

export const Auth: FC<IAuthProps> = () => {
  return (
    <div>
      <Input title={'Email'} type={'email'}/>
      <Input title={'Password'} type={'password'}/>
      <Input title={'Nickname'} type={'text'}/>
      <input type="file"/>
    </div>
  );
};