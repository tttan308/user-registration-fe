import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'Login failed';
    } else {
      throw new Error('Login failed');
    }
  }
};
