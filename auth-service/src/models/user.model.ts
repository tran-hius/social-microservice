import mongoose, { Schema, Document, Model } from 'mongoose';

export type UserRole = 'admin' | 'reader';
export type UserStatus = 'active' | 'blocked';

export interface IUserDocument extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  username: string;
  password?: string;
  role: UserRole;
  status: UserStatus;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'reader'],
      default: 'reader',
      index: true,
    },
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    lastLoginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>('User', userSchema);
