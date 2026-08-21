import { Request, Response, NextFunction } from 'express';
import { ITokenService } from '../interfaces';
import { tokenService } from '../services/token.service';
import { ApiResponse } from '../utils/api-response';
import { UnauthorizedError } from '../utils/custom-errors';
import { RefreshTokenDto } from '../dtos';

export class TokenController {
  constructor(private readonly service: ITokenService = tokenService) {}

  async refresh(req: Request<{}, {}, RefreshTokenDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const tokens = await this.service.refreshTokens(req.body.refreshToken, metadata);
      return ApiResponse.success(res, tokens, 'Tokens refreshed successfully');
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request<{}, {}, { refreshToken?: string }>, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (refreshToken) {
        await this.service.logout(refreshToken);
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

      await this.service.logoutAll(userId);
      return ApiResponse.success(res, null, 'Logged out from all devices successfully');
    } catch (error) {
      next(error);
    }
  }
}

export const tokenController = new TokenController();
