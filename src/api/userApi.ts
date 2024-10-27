import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw new Error('Registration failed');
    }
  }
};
