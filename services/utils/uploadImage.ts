import { http } from "../../utils/http";
import * as sessionService from "../../utils/session"
interface UploadResponse {
  filename: string;
  path: string;
  url: string;
}

interface UploadBulkResponse {
  data: UploadResponse[]
}


export async function uploadImage(formData: FormData) {
  const { data: response } = await http<{ data: UploadResponse }>(
    'upload/foto',
    {
      baseURL: "https://backend-uat.notes.co.id/v1",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  );

  return response;
}
