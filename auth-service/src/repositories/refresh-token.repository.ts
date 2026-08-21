import mongoose, { Model } from 'mongoose';
import { RefreshTokenModel, IRefreshTokenDocument } from '../models/refresh-token.model.js';
import { IRefreshTokenRepository } from '../interfaces/index.js';

export class RefreshTokenRepository implements IRefreshTokenRepository {
  constructor(private readonly model: Model<IRefreshTokenDocument> = RefreshTokenModel) {}

  async create(data: {
    userId: string;
    token: string;
    expiresAt: Date;
    userAgent?: string;
    ipAddress?: string;
  }): Promise<IRefreshTokenDocument> {
    const refreshTokenDoc = new this.model({
      userId: new mongoose.Types.ObjectId(data.userId),
      token: data.token,
      expiresAt: data.expiresAt,
      userAgent: data.userAgent || '',
      ipAddress: data.ipAddress || '',
    });

    return refreshTokenDoc.save();
  }

  async findByToken(token: string): Promise<IRefreshTokenDocument | null> {
    return this.model.findOne({ token, isRevoked: false });
  }

  async revokeToken(token: string): Promise<void> {
    await this.model.findOneAndUpdate({ token }, { isRevoked: true });
  }

  async revokeAllUserTokens(userId: string): Promise<void> {
    await this.model.updateMany(
      { userId: new mongoose.Types.ObjectId(userId) },
      { isRevoked: true }
    );
  }

  async deleteToken(token: string): Promise<void> {
    await this.model.deleteOne({ token });
  }
}

export const refreshTokenRepository = new RefreshTokenRepository();
