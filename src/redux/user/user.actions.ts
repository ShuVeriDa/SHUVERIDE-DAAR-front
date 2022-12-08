import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthResponse} from "./auth.interface";
import {LoginType, RegisterType} from "../../api/types";
import {AuthAPI} from "../../api/authAPI";
import {errorCatch} from "../../api/api.helpers";

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
        throw new Error('Your authorization is finished, please sign in again')
        thunkAPI.dispatch(logoutTC())
      }

      return thunkAPI.rejectWithValue(error)
    }
  }
)