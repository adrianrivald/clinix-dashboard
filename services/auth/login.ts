import { http } from "../../utils/http";

export interface LoginCredentialsDTO {
    email: string;
    password: string;
  }

  interface LoginResponse {
   status: string;
   status_code: number;
   message: string;
   timestamp: string;
   data: {
    token: string;
    expires: string;
   }
   metadata: any
  }

  interface Data {
    token: string
  }
  
  export async function loginUser(formData: LoginCredentialsDTO) {
    return http<LoginResponse>('/login', {
      data: {
        email: formData.email,
        password: formData.password,
      },
    });
  }