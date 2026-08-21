import { Request, Response, NextFunction } from 'express';
import { IRegisterService } from '../interfaces/index.js';
import { registerService } from '../services/register.service.js';
import { ApiResponse } from '../utils/api-response.js';
import { RegisterDto } from '../dtos/index.js';

export class RegisterController {
  constructor(private readonly service: IRegisterService = registerService) {}

  async handle(req: Request<{}, {}, RegisterDto>, res: Response, next: NextFunction) {
    try {
      const metadata = {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      };

      const result = await this.service.execute(req.body, metadata);
      return ApiResponse.created(res, result, 'User registered successfully');
    } catch (error) {
      next(error);
    }
  }
}

export const registerController = new RegisterController();
