import {FC} from 'react';

import styles from './AuthButton.module.scss';

interface IAuthButtonProps {
}

export const AuthButton: FC<IAuthButtonProps> = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} >Войти</button>
    </div>
  );
};