import {instance} from "./intance";
import {CommentsResponseType} from "./types";

export const commentAPI = {
  getComments: () => {
    return instance.get<CommentsResponseType[]>(`/comments`)
  },
  getCommentsById: (id: string) => {
    return instance.get<CommentsResponseType[]>(`/comments/${id}`)
  },
  createComment: (comment: CommentsResponseType) => {
    return instance.post<CommentsResponseType>('/comments', comment)
  },
  removeComment: (id: string) => {
    return instance.delete<CommentsResponseType>(`/comments/${id}`)
  },
  editComment: (id: string, text: string) => {
    return instance.put<CommentsResponseType>(`comments/${id}`, {text: text})
  }
}

