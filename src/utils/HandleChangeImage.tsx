import {ChangeEvent} from 'react';
import {UploadFileAPI} from "../api/uploadFileAPI";

export const HandleChangeImage = async (e: ChangeEvent<HTMLInputElement>, setImageUrl: (imageUrl: string) => void, folderName: string) => {
  const files = e.target.files
  if(!files?.length) return

  const formData = new FormData()
  formData.append('file', files[0])
  try {
    const res = await UploadFileAPI.uploadFile(formData, folderName)
    setImageUrl(res.data[0].url)
  } catch (error) {
    console.warn(error)
  }
};