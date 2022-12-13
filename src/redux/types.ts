export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type AuthInputType = {
  nickName: string,
  email: string,
  password: string,
  isAdmin: boolean,
  avatar: string
}