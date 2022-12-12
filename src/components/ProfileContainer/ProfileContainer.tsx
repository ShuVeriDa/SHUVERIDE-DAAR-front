import {FC} from 'react';

import styles from './ProfileContainer.module.scss';
import {AuthButton} from "../Buttons/AuthButton/AuthButton";
import {useAppSelector} from "../../redux/store";
import {Profile} from "../Profile/Profile";

interface IProfileProps {
}

export const ProfileContainer: FC<IProfileProps> = () => {
  const {user} = useAppSelector(state => state.user)



  return (
    <div className={styles.container}>
      {!user ? <AuthButton /> : <Profile user={user} /> }
    </div>
  );
};