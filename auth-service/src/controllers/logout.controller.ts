import { NextFunction, Request, Response } from "express";
import { ITokenService } from "../interfaces/service.interface.js";
import { tokenService } from "../services/token.service.js";
import { logoutService } from "../services/logout.service.js";
import { ApiResponse } from "../utils/api-response.js";
import { UnauthorizedError } from "../utils/custom-errors.js";

class LogoutController {
constructor(private readonly service: ITokenService = tokenService) {}
  async logout(
    req: Request<{}, {}, { refreshToken?: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader?.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : undefined;

      const { refreshToken } = req.body;

      if (accessToken) {
        await logoutService.execute(accessToken, refreshToken);
      } else if (refreshToken) {
        await this.service.logout(refreshToken);
      }

      return ApiResponse.success(res, null, "Logged out successfully");
    } catch (error) {
      next(error);
    }
  }

  async logoutAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.headers["x-user-id"] as string;

      if (!userId) {
        throw new UnauthorizedError("Unauthorized: Missing user context");
      }

      await this.service.logoutAll(userId);
      return ApiResponse.success(
        res,
        null,
        "Logged out from all devices successfully",
      );
    } catch (error) {
      next(error);
    }
  }
}

export const logoutController = new LogoutController();