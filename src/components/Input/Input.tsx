import {FC} from 'react';

import styles from './Input.module.scss';

interface IInputProps {
  title?: string
  type: string
}

export const Input: FC<IInputProps> = ({type, title}) => {
  return (
    <div className={styles.input}>
      <input type={type}/>
      <label>{title}</label>
    </div>
  );
};