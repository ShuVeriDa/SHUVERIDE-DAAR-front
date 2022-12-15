import {UserType} from "../../api/user.types";
import {StatusEnum} from "../types";
import {UploadFileResponseType} from "../../api/types";

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: UserType & {
    isAdmin: boolean
  }
}

export interface IUserState {
  id: number,
  email: string,
  nickName: string
  isAdmin: boolean,
  avatar: string
  createdAt: string
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IInitialState {
  user: IUserState | null
  status: StatusEnum
  images: UploadFileResponseType
}