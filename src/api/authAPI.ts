import {axiosClassic, instance} from "./interceptors";
import {LoginType, RegisterType} from "./types";
import {removeTokensStorage, saveToStorage} from "./auth.helpers";
import {IAuthResponse} from "../redux/user/auth.interface";
import Cookies from "js-cookie";
import {getContentType} from "./api.helpers";

export const AuthAPI = {
  register: async (data: RegisterType) => {
    const res = await instance.post<IAuthResponse>(`auth/register`, data)

    if (res.data.accessToken) {
      saveToStorage(res.data)
    }

    return res
  },
  login: async (data: LoginType) => {
    const res = await axiosClassic.post<IAuthResponse>(`auth/login`, data)

    if (res.data.accessToken) saveToStorage(res.data)

    return res
  },
  logout: () => {
    removeTokensStorage()
    localStorage.removeItem('user')
  },
  getNewTokens: async () => {
    const refreshToken = Cookies.get('refreshToken')
    const res = await axiosClassic.post<IAuthResponse>(`auth/login/access-token`,
      {refreshToken},
      {headers: getContentType()}
    )

    if (res.data.accessToken) saveToStorage(res.data)

    return res
  }
}

