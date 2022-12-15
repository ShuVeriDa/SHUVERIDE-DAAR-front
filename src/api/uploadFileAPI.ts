import {axiosClassic} from "./interceptors";
import {UploadFileResponseType, UploadType} from "./types";

export const UploadFileAPI = {
  uploadFile: (data: UploadType) => {
    return axiosClassic.post<UploadFileResponseType>(`/files?folder=${data.folderName}`, data.file)
  }
}