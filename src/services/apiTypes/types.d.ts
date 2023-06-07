export interface UserDetails {
  id: number;
  email: string;
}
export interface LoginResponse {
  token: string;
  user: UserDetails;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ResetPasswordRequest {
  id: number;
  old_password: string;
  password: string;
  password2: string;
  token: string;
}
