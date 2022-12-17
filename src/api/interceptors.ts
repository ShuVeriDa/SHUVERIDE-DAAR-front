import axios from "axios";
import Cookies from "js-cookie";
import {errorCatch, getContentType} from "./api.helpers";

export const axiosClassic = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: getContentType(),
})
export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: getContentType()
})

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

instance.interceptors.request.use((config) => config, async (error) => {
  const originalRequest = error.config

  if (
    (error.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided'
    ) && error.config && !error.config._isRetry
  ) {
    originalRequest._isRetry = true
  }
})

