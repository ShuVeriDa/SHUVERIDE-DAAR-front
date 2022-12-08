import {FC} from 'react';

import styles from './AuthButton.module.scss';
import {Link} from "react-router-dom";

interface IAuthButtonProps {
}

export const AuthButton: FC<IAuthButtonProps> = () => {
  return (
    <div className={styles.btnContainer}>
      <Link to={'/auth'}>
        <button className={styles.btn}>Войти</button>
      </Link>

    </div>
  );
};