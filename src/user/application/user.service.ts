import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserTypeOrmRepo } from '../domain/IUserRepository';
import { User } from '../domain/User';
import { UserRootEntityRepository } from '../infra/UserRepository';
import { UserRootEntity } from '../infra/UserRoot.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRootEntityRepository)
    private readonly userRepository: IUserTypeOrmRepo,
  ) {}

  async signUp(userId: string, passWord: string, name: string) {
    const user = User.create({
      id: this.userRepository.nextId(),
      name: name,
      userId: userId,
      passWord: passWord,
    });
    await this.userRepository.saveAG(user);
    return user;
  }
}
