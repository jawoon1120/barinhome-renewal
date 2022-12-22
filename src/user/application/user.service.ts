import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../domain/IUserRepository';
import { User } from '../domain/User';
import { UserRepository } from '../infra/UserRepository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async signUp(userId: string, passWord: string, name: string) {
    const user = User.create({
      id: this.userRepository.nextId(),
      name: name,
      userId: userId,
      passWord: passWord,
    });

    await this.userRepository.save(user);
    return user;
  }
}
