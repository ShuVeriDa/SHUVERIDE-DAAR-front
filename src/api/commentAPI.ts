import {axiosClassic, instance} from "./interceptors";
import {CommentsResponseType, CreateCommentsRequestType, CreateCommentType, UpdateCommentType} from "./types";

export const commentAPI = {
  getComments: () => {
    return axiosClassic.get<CommentsResponseType[]>(`/comments`)
  },
  getCommentsById: (id: string) => {
    return axiosClassic.get<CommentsResponseType[]>(`/comments/food/${id}`)
  },
  createComment: (comment: CreateCommentType) => {
    return instance.post<CommentsResponseType>('/comments', comment)
  },
  editComment: (comment: UpdateCommentType) => {
    return instance.put<CommentsResponseType>(`/comments/${comment.id}`, comment)
  },
  removeComment: (id: string) => {
    return instance.delete(`/comments/${id}`)
  },

}

