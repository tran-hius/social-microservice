import { IProfileService, IUserRepository } from '../interfaces/index.js';
import { UserResponseDto } from '../dtos/index.js';
import { userRepository } from '../repositories/user.repository.js';
import { UserMapper } from '../mappers/user.mapper.js';
import { NotFoundError } from '../utils/custom-errors.js';

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
