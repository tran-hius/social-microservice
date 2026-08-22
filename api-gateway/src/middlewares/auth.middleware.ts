import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BlacklistCacheService } from "@social/shared/cache";

const blacklistCache = new BlacklistCacheService();

interface JwtPayload {
  userId: string;
  email: string;
  role?: string;
  jti?: string;
}

export const optionalAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.split(" ")[1];
  const secret =
    process.env.ACCESS_TOKEN_SECRET || "supersecret_access_key_social_2026";

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    if(decoded.jti) {
      const isBlocked = await blacklistCache.isTokenBlocked(decoded.jti);
      if(isBlocked){
        return res.status(401).json({error: "Token has been revoked"});
      }
    }

    if (decoded && decoded.userId) {
      req.headers["x-user-id"] = decoded.userId;
      req.headers["x-user-email"] = decoded.email;
      req.headers["x-user-role"] = decoded.role || "user";
    }
  } catch (error) {
    // Token không hợp lệ hoặc đã hết hạn:
    // Ta không chặn ở Gateway vì có những route public, chỉ đơn giản là không gán x-user-id
  }

  next();
};
