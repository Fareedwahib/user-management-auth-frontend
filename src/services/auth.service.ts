import api from './api';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../types';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

// export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
//   const response = await api.post<AuthResponse>('/auth/register', credentials);
//   return response.data;
// };
export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    console.log("Sending registration request:", credentials);
    try {
      const response = await api.post<AuthResponse>('/auth/register', credentials);
      console.log("Registration response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Registration service error:", error);
      throw error;
    }
  };

export const getProfile = async (): Promise<AuthResponse['user']> => {
  const response = await api.get<AuthResponse['user']>('/auth/profile');
  return response.data;
};
