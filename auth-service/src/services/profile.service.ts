import { IProfileService, IUserRepository } from '../interfaces';
import { UserResponseDto } from '../dtos';
import { userRepository } from '../repositories/user.repository';
import { UserMapper } from '../mappers/user.mapper';
import { NotFoundError } from '../utils/custom-errors';

export class ProfileService implements IProfileService {
  constructor(private readonly userRepo: IUserRepository = userRepository) {}

  async getProfile(userId: string): Promise<UserResponseDto> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return UserMapper.toResponseDto(user);
  }
}

export const profileService = new ProfileService();
