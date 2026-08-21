import { Request, Response, NextFunction } from 'express';
import { ILoginService } from '../interfaces';
import { loginService } from '../services/login.service';
import { ApiResponse } from '../utils/api-response';
import { LoginDto } from '../dtos';

export class LoginController {
  constructor(private readonly service: ILoginService = loginService) {}

  async handle(req: Request<{}, {}, LoginDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const result = await this.service.execute(req.body, metadata);
      return ApiResponse.success(res, result, 'Login successful');
    } catch (error) {
      next(error);
    }
  }
}

export const loginController = new LoginController();
