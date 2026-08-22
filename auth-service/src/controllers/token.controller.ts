import { Request, Response, NextFunction } from 'express';
import { ITokenService } from '../interfaces/index.js';
import { tokenService } from '../services/token.service.js';
import { ApiResponse } from '../utils/api-response.js';
import { RefreshTokenDto } from '../dtos/index.js';



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
}

export const tokenController = new TokenController();
