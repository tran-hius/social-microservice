import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
  email: string;
  role?: string;
}

export const optionalAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.ACCESS_TOKEN_SECRET || "supersecret_access_key_social_2026";

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    
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