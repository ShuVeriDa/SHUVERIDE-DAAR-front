import {createSlice} from "@reduxjs/toolkit";
import {StatusEnum} from "../types";
import {getStoreLocal} from "./local-storage";
import {IInitialState} from "./auth.interface";
import {checkAuthTC, loginTC, logoutTC, registerTC, uploadImageUserTC} from "./user.actions";

const initialState: IInitialState = {
  status: StatusEnum.IDLE,
  user: getStoreLocal('user'),
  image: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*register*/
      .addCase(registerTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(registerTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.user = action.payload.user
      })
      .addCase(registerTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.user = null
      })

      /*login*/
      .addCase(loginTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(loginTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.user = action.payload.user
      })
      .addCase(loginTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.user = null
      })

      /*logout*/
      .addCase(logoutTC.fulfilled, (state, action) => {
        state.status = StatusEnum.ERROR
        state.user = null
      })

    /*checkAuth*/
      .addCase(checkAuthTC.fulfilled, (state, action) => {
        state.user = action.payload.user
      })

    /*uploadPhoto*/
      .addCase(uploadImageUserTC.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(uploadImageUserTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.image = action.payload

      })
      .addCase(uploadImageUserTC.rejected, state => {
        state.status = StatusEnum.ERROR
      })
  }
})

export const userReducer = userSlice.reducer