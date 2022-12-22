import {ChangeEvent, FC, useEffect, useState} from 'react';

import styles from './Auth.module.scss';
import {Login} from "../../components/Login/Login";
import {SubmitHandler, useForm} from "react-hook-form";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useDispatch} from "react-redux";
import {AuthInputType} from "../../redux/types";
import {loginTC, registerTC, uploadImageUserTC} from "../../redux/user/user.actions";
import {useNavigate} from "react-router-dom";
import {Register} from "../../components/Register/Register";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {AuthAPI} from "../../api/authAPI";
import {UploadFileAPI} from "../../api/uploadFileAPI";

interface IAuthProps {
}

export const Auth: FC<IAuthProps> = () => {
  const dispatch = useDispatch<AppDispatchType>()
  const navigate = useNavigate()

  const [type, setType] = useState<'login' | 'register'>('login')
  const [imageUrl, setImageUrl] = useState('')

  const {status, user} = useAppSelector(state => state.user)
  const {register: registerInput, handleSubmit, formState, reset} = useForm<AuthInputType>({mode: "onChange"})

  const onSubmit: SubmitHandler<AuthInputType> = (data) => {
    if (type === 'login') dispatch(loginTC(data))
    else if (type === 'register')
      dispatch(registerTC({
        ...data,
        avatar: imageUrl,
        isAdmin: JSON.parse(String(data.isAdmin))
      }))

    console.log(data.avatar)
    reset()
  }

  console.log(imageUrl, "imageUrl")

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const onSelectType = (type: 'login' | 'register') => {
    setType(type)
  }

  const handleChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
   const files = event.target.files
    if(!files?.length) return

    const formData = new FormData()
    formData.append('file', files[0])
    try {
       const res = await UploadFileAPI.uploadFile(formData, 'user')
        setImageUrl(res.data[0].url)
    } catch (error) {
      console.log(error)
    }
     // dispatch(uploadImageUserTC({file: formData, folder: 'user'}))
  }

  return (
    <div className={styles.auth}>
      <div className={styles.authContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {type === 'login'
            ? <Login register={registerInput}
                     formState={formState}
                     isPasswordRequired
                     status={status}
                     onSelectType={onSelectType}
            />
            : <Register register={registerInput}
                        formState={formState}
                        isPasswordRequired
                        status={status}
                        onSelectType={onSelectType}
                        handleChangeImage={handleChangeImage}

            />
          }
          <div className={styles.buttons}>
            <SubmitButton status={status} classes={type === 'register' ? styles.anotherBtn : ''}
                          onSelectType={() => onSelectType('login')}
                          title={"Авторизоваться"}/>
            <SubmitButton status={status} classes={type === 'login' ? styles.anotherBtn : ''}
                          onSelectType={() => onSelectType('register')} title={"Зарегистрироватся"}/>
          </div>

        </form>

      </div>

    </div>
  );
};