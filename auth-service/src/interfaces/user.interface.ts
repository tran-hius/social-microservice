import { IUserDocument, UserRole } from '../models/user.model';
import { RegisterDto, LoginDto, AuthResponseDto, UserResponseDto } from '../dtos/user.dto';
import { ITokenPair } from './auth.interface';

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

export interface IAuthService {
  register(dto: RegisterDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
  login(dto: LoginDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
  refreshTokens(refreshToken: string, metadata?: { userAgent?: string; ipAddress?: string }): Promise<ITokenPair>;
  logout(refreshToken: string): Promise<void>;
  logoutAll(userId: string): Promise<void>;
  getMe(userId: string): Promise<UserResponseDto>;
}
