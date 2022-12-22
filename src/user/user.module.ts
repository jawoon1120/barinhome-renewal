import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserEntityMapper } from './infra/UserEntityMapper';
import { UserRepository } from './infra/UserRepository';
import { UserController } from './interface/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserEntityMapper, UserRepository],
})
export class UserModule {}
