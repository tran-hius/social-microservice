import { UserRole, UserStatus } from '../models/user.model';

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
