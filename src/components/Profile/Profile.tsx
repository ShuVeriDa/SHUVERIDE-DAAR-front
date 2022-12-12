import {FC} from 'react';

import styles from './Profile.module.scss';
import {IUserState} from "../../redux/user/auth.interface";

import defaultAvatar from '../../assets/img/user.jpg'

import cn from 'classnames'
import {AuthAPI} from "../../api/authAPI";
interface IProfileProps {
  user: IUserState
}


export const Profile: FC<IProfileProps> = ({user}) => {

  return (
    <div className={styles.profile} >
      <span className={ cn(user.isAdmin ? styles.admin : styles.nick)} >{user.nickName}</span>
      <img src={defaultAvatar} className={styles.image} alt=""/>
    </div>
  );
};