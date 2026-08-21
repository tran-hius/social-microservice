import { Request, Response, NextFunction } from 'express';
import { IProfileService } from '../interfaces/index.js';
import { profileService } from '../services/profile.service.js';
import { ApiResponse } from '../utils/api-response.js';
import { UnauthorizedError } from '../utils/custom-errors.js';

export class ProfileController {
  constructor(private readonly service: IProfileService = profileService) {}

  async me(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.headers['x-user-id'] as string;

      if (!userId) {
        throw new UnauthorizedError('Unauthorized: Missing user authentication context');
      }

      const user = await this.service.getProfile(userId);
      return ApiResponse.success(res, user, 'User profile retrieved');
    } catch (error) {
      next(error);
    }
  }
}

export const profileController = new ProfileController();
