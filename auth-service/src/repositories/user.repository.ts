import { Model } from 'mongoose';
import { UserModel, IUserDocument, UserRole } from '../models/user.model';
import { IUserRepository } from '../interfaces';

export class UserRepository implements IUserRepository {
  constructor(private readonly model: Model<IUserDocument> = UserModel) {}

  async create(userData: {
    email: string;
    username: string;
    password: string;
    role?: UserRole;
  }): Promise<IUserDocument> {
    const user = new this.model({
      email: userData.email.toLowerCase().trim(),
      username: userData.username.toLowerCase().trim(),
      password: userData.password,
      role: userData.role || 'reader',
    });
    return user.save();
  }

  async findByEmail(email: string): Promise<IUserDocument | null> {
    return this.model.findOne({ email: email.toLowerCase().trim() });
  }

  async findByUsername(username: string): Promise<IUserDocument | null> {
    return this.model.findOne({ username: username.toLowerCase().trim() });
  }

  async findById(id: string): Promise<IUserDocument | null> {
    return this.model.findById(id);
  }

  async findByIdWithPassword(id: string): Promise<IUserDocument | null> {
    return this.model.findById(id).select('+password');
  }

  async findByEmailOrUsernameWithPassword(identifier: string): Promise<IUserDocument | null> {
    const cleanIdentifier = identifier.toLowerCase().trim();
    return this.model.findOne({
      $or: [{ email: cleanIdentifier }, { username: cleanIdentifier }],
    }).select('+password');
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.model.findByIdAndUpdate(userId, { lastLoginAt: new Date() });
  }
}

export const userRepository = new UserRepository();
