export interface User {
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}
