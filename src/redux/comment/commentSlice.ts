import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentsResponseType} from "../../api/types";
import {CreateNewCommentTC, EditCommentsTC, FetchCommentsTC, RemoveCommentTC} from "./comment.actions";

export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

const initialState: initialStateType = {
  comments: [],
  valueComment: '',
  status: StatusEnum.IDLE
}


export const CommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setValueComment: (state, action: PayloadAction<string>) => {
      state.valueComment = action.payload
    }
  },
  extraReducers: builder => {
    builder
      //Получение комментарий
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

      //Создание комментария
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

      //Изменение комментария
      .addCase(EditCommentsTC.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(EditCommentsTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        const findComment = state.comments.find(obj => obj.id === action.payload.id)

        if (findComment) {
          findComment.text = action.payload.text
        }
      })
      .addCase(EditCommentsTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
      })

      //Удаление комментария
      .addCase(RemoveCommentTC.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(RemoveCommentTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.comments = state.comments.filter(obj => obj.id !== action.payload.id)
      })
      .addCase(RemoveCommentTC.rejected, (state) => {
        state.status = StatusEnum.ERROR
      })
  }
})

export const {setValueComment} = CommentSlice.actions
export const commentReducer = CommentSlice.reducer

interface initialStateType {
  comments: CommentsResponseType[]
  valueComment: string
  status: StatusEnum
}