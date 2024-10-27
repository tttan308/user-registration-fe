import axios from 'axios';
import { User, RegisterResponse } from '../types/userType';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

export const registerUser = async (userData: User): Promise<RegisterResponse> => {
  try {
    const response = await api.post<RegisterResponse>('/user/register', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Đăng ký thất bại');
    } else {
      throw new Error('Đăng ký thất bại');
    }
  }
};
