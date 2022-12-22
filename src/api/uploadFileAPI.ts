import {axiosClassic, instance} from "./interceptors";
import {UploadFileResponseType, UploadType} from "./types";
import axios from "axios";

export const UploadFileAPI = {
  uploadFile: (file: FormData, folder?: string) => {
    return axiosClassic.post<UploadFileResponseType[]>(`/files`, file, {
      params: {folder},
      headers: {'Content-Type': "multipart/form-data"}
    })
  }
}