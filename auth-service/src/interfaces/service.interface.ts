import { RegisterDto, LoginDto, AuthResponseDto, UserResponseDto } from '../dtos';
import { ITokenPair } from './auth.interface';

export interface IRegisterService {
  execute(dto: RegisterDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
}

export interface ILoginService {
  execute(dto: LoginDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto>;
}

export interface ITokenService {
  refreshTokens(refreshToken: string, metadata?: { userAgent?: string; ipAddress?: string }): Promise<ITokenPair>;
  logout(refreshToken: string): Promise<void>;
  logoutAll(userId: string): Promise<void>;
}

export interface IProfileService {
  getProfile(userId: string): Promise<UserResponseDto>;
}
