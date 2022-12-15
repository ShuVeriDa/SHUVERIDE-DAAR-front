import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthResponse} from "./auth.interface";
import {LoginType, RegisterType, UploadFileResponseType, UploadType} from "../../api/types";
import {AuthAPI} from "../../api/authAPI";
import {errorCatch} from "../../api/api.helpers";
import {saveToStorage} from "../../api/auth.helpers";
import {UploadFileAPI} from "../../api/uploadFileAPI";

export const registerTC = createAsyncThunk<IAuthResponse, RegisterType>('auth/register', async (data, thunkAPI) => {
    try {
      const res = await AuthAPI.register(data)
      return res.data
    } catch (error) {
      throw new Error('Failed to register')
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const loginTC = createAsyncThunk<IAuthResponse, LoginType>('auth/login', async (data, thunkAPI) => {
    try {
      const res = await AuthAPI.login(data)
      return res.data
    } catch (error) {
      throw new Error('Failed to login')
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const logoutTC = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  await AuthAPI.logout()
})
export const chechAuthTC = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
    try {
      const res = await AuthAPI.getNewTokens()
      return res.data
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') {
        thunkAPI.dispatch(logoutTC())
        throw new Error('Your authorization is finished, please sign in again')
      }

      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const uploadImageUserTC = createAsyncThunk<UploadFileResponseType, UploadType>('auth/uploadImage', async (data) => {
  try {
    const res = await UploadFileAPI.uploadFile(data)
    return res.data
  } catch (error) {
    throw new Error("Failed to upload photo")
  }
})