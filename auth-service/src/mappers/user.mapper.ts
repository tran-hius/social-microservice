import { IUserDocument } from '../models/user.model';
import { UserResponseDto } from '../dtos';

export class UserMapper {
  static toResponseDto(user: IUserDocument): UserResponseDto {
    return {
      id: user._id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
      status: user.status,
      lastLoginAt: user.lastLoginAt ? user.lastLoginAt.toISOString() : null,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  static toResponseDtoList(users: IUserDocument[]): UserResponseDto[] {
    return users.map((user) => this.toResponseDto(user));
  }
}
