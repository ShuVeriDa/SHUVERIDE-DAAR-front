export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type LoginInputType = {
  email: string
  password: string
}