import { RegisterDto, LoginDto, AuthResponseDto, UserResponseDto } from '../dtos/index.js';
import { ITokenPair } from './auth.interface.js';

export interface IRegisterService {
  execute(dto: RegisterDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
}

export interface ILoginService {
  execute(dto: LoginDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
}

export interface ITokenService {
  refreshTokens(refreshToken: string, metadata?: { userAgent?: string; ipAddress?: string }): Promise<ITokenPair>;
}

export interface IProfileService {
  getProfile(userId: string): Promise<UserResponseDto>;
}

export interface ILogoutService {
  execute(accessToken?: string, refreshToken?: string): Promise<void>;
  logoutAll(userId: string): Promise<void>;
}