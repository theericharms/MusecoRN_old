import { FormFile } from './formFile'

export type File = {
  fileVM_Id: number
  fileVM_FileTypeId: number
  fileVM_File: FormFile | null
  fileVM_FileName: string | null
  fileVM_Name: string | null
  fileVM_Url: string | null
  fileVM_IsDefault: boolean
  fileVM_ProductId: number
  fileVM_ArtistId: number
}
