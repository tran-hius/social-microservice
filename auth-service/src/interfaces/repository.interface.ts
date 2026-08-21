import { IUserDocument, UserRole } from '../models/user.model';
import { IRefreshTokenDocument } from '../models/refresh-token.model';

export interface IUserRepository {
  create(userData: {
    email: string;
    username: string;
    password: string;
    role?: UserRole;
  }): Promise<IUserDocument>;

  findByEmail(email: string): Promise<IUserDocument | null>;
  findByUsername(username: string): Promise<IUserDocument | null>;
  findById(id: string): Promise<IUserDocument | null>;
  findByIdWithPassword(id: string): Promise<IUserDocument | null>;
  findByEmailOrUsernameWithPassword(identifier: string): Promise<IUserDocument | null>;
  updateLastLogin(userId: string): Promise<void>;
}

export interface IRefreshTokenRepository {
  create(data: {
    userId: string;
    token: string;
    expiresAt: Date;
    userAgent?: string;
    ipAddress?: string;
  }): Promise<IRefreshTokenDocument>;

  findByToken(token: string): Promise<IRefreshTokenDocument | null>;
  revokeToken(token: string): Promise<void>;
  revokeAllUserTokens(userId: string): Promise<void>;
  deleteToken(token: string): Promise<void>;
}
