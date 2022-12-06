import {FC} from 'react';

import styles from './Auth.module.scss';
import {Login} from "../Login/Login";

interface IAuthProps {
}

export const Auth: FC<IAuthProps> = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.authContainer}>
        {/*<Register />*/}
        <Login />
      </div>

    </div>
  );
};