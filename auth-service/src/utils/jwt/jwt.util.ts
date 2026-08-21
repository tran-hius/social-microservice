import jwt from 'jsonwebtoken';
import { IJwtPayload, ITokenPair } from '../../interfaces/auth.interface';
import { UnauthorizedError } from '../custom-errors';

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || 'supersecret_access_key_social_2026';
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || 'supersecret_refresh_key_social_2026';

const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = '7d';

export const generateAccessToken = (payload: IJwtPayload): string => {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

export const generateRefreshToken = (payload: IJwtPayload): string => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
};

export const generateAuthTokens = (payload: IJwtPayload): ITokenPair => {
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string): IJwtPayload => {
  try {
    return jwt.verify(token, ACCESS_SECRET) as IJwtPayload;
  } catch (error) {
    throw new UnauthorizedError('Invalid or expired access token');
  }
};

export const verifyRefreshToken = (token: string): IJwtPayload => {
  try {
    return jwt.verify(token, REFRESH_SECRET) as IJwtPayload;
  } catch (error) {
    throw new UnauthorizedError('Invalid or expired refresh token');
  }
};
