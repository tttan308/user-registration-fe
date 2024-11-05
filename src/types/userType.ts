export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  id: string;
  email: string;
  createdAt: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LogoutRequest {
  refreshToken: string;
}
