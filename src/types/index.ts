export interface User {
    id: string;
    name: string;
    email: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AuthResponse {
    user: User;
    accessToken: string;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
  }
  
  export interface UpdateUserData {
    name?: string;
    email?: string;
  }
  