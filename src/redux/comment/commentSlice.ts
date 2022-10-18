import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentAPI, CommentsResponseType} from "../../api/commentAPI";

export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

const initialState: initialStateType = {
  comments: [],
  status: StatusEnum.IDLE
}

export const FetchCommentsTC = createAsyncThunk<CommentsResponseType[]>('comments/fetchComments', async () => {
  try {
    const res = await commentAPI.getComments()
    return res.data
  } catch (error) {
    throw new Error('Не удалось получить комментарии.')
  }
})

export const CommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(FetchCommentsTC.pending, (state) => {
        state.status = StatusEnum.LOADING
        state.comments = []
      })
      .addCase(FetchCommentsTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.comments = action.payload
      })
      .addCase(FetchCommentsTC.rejected, (state, action) => {
        state.status = StatusEnum.ERROR
        state.comments = []
      })
  }
})

export const {} = CommentSlice.actions
export const commentReducer = CommentSlice.reducer

interface initialStateType {
  comments: CommentsResponseType[]
  status: StatusEnum
}