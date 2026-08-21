import { UserRole, UserStatus } from '../models/user.model.js';

export interface UserResponseDto {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  lastLoginAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
