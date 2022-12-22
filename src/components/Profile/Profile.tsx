import {FC, MouseEvent} from 'react';

import styles from './Profile.module.scss';
import {IUserState} from "../../redux/user/auth.interface";

import defaultAvatar from '../../assets/img/user.jpg'

import cn from 'classnames'
import {AuthAPI} from "../../api/authAPI";
import {Link} from "react-router-dom";
import {logoutTC} from "../../redux/user/user.actions";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../redux/store";

interface IProfileProps {
  user: IUserState
}


export const Profile: FC<IProfileProps> = ({user}) => {
  const dispatch = useDispatch<AppDispatchType>()

  const userAvatar = user.avatar ? process.env.REACT_APP_URL + user.avatar.replace('/uploads', 'uploads') : defaultAvatar
  const onClickLogOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(logoutTC())
  }

  return (
    <a className={styles.profile} onClick={onClickLogOut}>
      <span className={ cn(user.isAdmin ? styles.admin : styles.nick)} >{user.nickName}</span>
      <img src={userAvatar} className={styles.image} alt=""/>
    </a>
  );
};