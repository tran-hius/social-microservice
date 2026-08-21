import { UserRole } from '../models/user.model.js';

export interface IJwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export interface ITokenPair {
  accessToken: string;
  refreshToken: string;
}
