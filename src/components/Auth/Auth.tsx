import {FC, useEffect} from 'react';

import styles from './Auth.module.scss';
import {Login} from "../Login/Login";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useDispatch} from "react-redux";
import {LoginInputType} from "../../redux/types";
import {loginTC} from "../../redux/user/user.actions";
import {useNavigate} from "react-router-dom";

interface IAuthProps {}

export const Auth: FC<IAuthProps> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const navigate = useNavigate()
  const {status, user} = useAppSelector(state => state.user)
  const {register: registerInput, handleSubmit, formState, reset} = useForm<LoginInputType>({mode: "onChange"})

  const onSubmit:SubmitHandler<LoginInputType> = (data) => {
    dispatch(loginTC(data))
    reset()
    console.log(data)
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return (
      <div className={styles.auth}>
        <div className={styles.authContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<Register status={status}/>*/}
            <Login register={registerInput}
                   formState={formState}
                   isPasswordRequired
                   status={status}
            />
          </form>
        </div>

      </div>
  );
};