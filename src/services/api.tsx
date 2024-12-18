import axios from "axios";
import {
  User,
  RegisterResponse,
  LoginResponse,
  LogoutRequest,
} from "../types/userType";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginUser = async (userData: User): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/user/login", userData);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to login");
    } else {
      throw new Error("Failed to login");
    }
  }
};

export const registerUser = async (
  userData: User,
): Promise<RegisterResponse> => {
  try {
    const response = await api.post<RegisterResponse>(
      "/user/register",
      userData,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to register");
    } else {
      throw new Error("Failed to register");
    }
  }
};

export const logOut = async (logoutRequest: LogoutRequest) => {
  try {
    await api.post("/user/logout", logoutRequest);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Đăng xuất thất bại");
    } else {
      throw new Error("Đăng xuất thất bại");
    }
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch {
    throw new Error("Failed to fetch profile");
  }
};
