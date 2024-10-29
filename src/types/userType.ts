export interface User {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface LogoutRequest {
  token: string; // refresh token
}
