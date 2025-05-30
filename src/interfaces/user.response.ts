export interface UserResponse{
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
  token: string;
}
