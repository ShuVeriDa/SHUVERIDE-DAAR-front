import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import uuid from "react-uuid";
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
    console.warn(error)
    throw new Error('Не удалось получить комментарии.')
  }
})

export const CreateNewCommentTC = createAsyncThunk<CommentsResponseType, CommentsResponseType>('comments/createComment', async (comment) => {
  try {
    const res = await commentAPI.createComment(comment)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось написать комментарий.')
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
      .addCase(CreateNewCommentTC.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(CreateNewCommentTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.comments.push(action.payload)
      })
      .addCase(CreateNewCommentTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
      })
  }
})

export const {} = CommentSlice.actions
export const commentReducer = CommentSlice.reducer

interface initialStateType {
  comments: CommentsResponseType[]
  status: StatusEnum
}