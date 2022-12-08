import {UserType} from "../../api/user.types";
import {StatusEnum} from "../types";

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
  email: string
  isAdmin: boolean
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IInitialState {
  user: IUserState | null
  status: StatusEnum
}