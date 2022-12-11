import {createAsyncThunk} from "@reduxjs/toolkit";
import {CommentsResponseType, CreateCommentType, UpdateCommentType} from "../../api/types";
import {commentAPI} from "../../api/commentAPI";

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