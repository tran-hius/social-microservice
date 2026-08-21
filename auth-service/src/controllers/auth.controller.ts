import { Request, Response, NextFunction } from 'express';
import { IAuthService } from '../interfaces/user.interface';
import { authService } from '../services/auth.service';
import { ApiResponse } from '../utils/api-response';
import { UnauthorizedError } from '../utils/custom-errors';
import { RegisterDto, LoginDto, RefreshTokenDto } from '../dtos';

export class AuthController {
  constructor(private readonly authService: IAuthService) {}

  async register(req: Request<{}, {}, RegisterDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const result = await this.authService.register(req.body, metadata);
      return ApiResponse.created(res, result, 'User registered successfully');
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request<{}, {}, LoginDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const result = await this.authService.login(req.body, metadata);
      return ApiResponse.success(res, result, 'Login successful');
    } catch (error) {
      next(error);
    }
  }

  async refresh(req: Request<{}, {}, RefreshTokenDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const tokens = await this.authService.refreshTokens(req.body.refreshToken, metadata);
      return ApiResponse.success(res, tokens, 'Tokens refreshed successfully');
    } catch (error) {
      next(error);
    }
  }

  async me(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.headers['x-user-id'] as string;

      if (!userId) {
        throw new UnauthorizedError('Unauthorized: Missing user authentication context');
      }

      const user = await this.authService.getMe(userId);
      return ApiResponse.success(res, user, 'User profile retrieved');
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request<{}, {}, { refreshToken?: string }>, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (refreshToken) {
        await this.authService.logout(refreshToken);
      }

      return ApiResponse.success(res, null, 'Logged out successfully');
    } catch (error) {
      next(error);
    }
  }

  async logoutAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.headers['x-user-id'] as string;

      if (!userId) {
        throw new UnauthorizedError('Unauthorized: Missing user context');
      }

      await this.authService.logoutAll(userId);
      return ApiResponse.success(res, null, 'Logged out from all devices successfully');
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController(authService);
