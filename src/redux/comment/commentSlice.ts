import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {commentAPI} from "../../api/commentAPI";
import {CommentsResponseType, CreateCommentType, UpdateCommentType} from "../../api/types";

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

export const FetchCommentsTC = createAsyncThunk<CommentsResponseType[], string>('comments/fetchComments', async (id) => {
  try {
    const res = await commentAPI.getCommentsById(id)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось получить комментарии.')
  }
})

export const CreateNewCommentTC = createAsyncThunk<CommentsResponseType, CreateCommentType>('comments/createComment', async (comment) => {
  try {
    const res = await commentAPI.createComment(comment)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось написать комментарий.')
  }
})

export const EditCommentsTC = createAsyncThunk<CommentsResponseType, UpdateCommentType>('comments/editComment', async (comment) => {
  try {
    const res = await commentAPI.editComment(comment)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось редактировать комментарий.')
  }
})

export const RemoveCommentTC = createAsyncThunk<CommentsResponseType, string>('comments/removeComment', async (id) => {
  try {
    const res = await commentAPI.removeComment(id)
    return res.data
  } catch (error) {
    console.warn(error)
    throw new Error('Не удалось удалить комментарий.')
  }
})


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