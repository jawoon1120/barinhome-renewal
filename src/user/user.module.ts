import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserService } from './application/user.service';
import { UserEntityMapper } from './infra/UserEntityMapper';
import { UserRootEntityRepository } from './infra/UserRepository';
import { UserRootEntity } from './infra/UserRoot.entity';
import { UserController } from './interface/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRootEntity])],
  controllers: [UserController],
  providers: [UserService, UserEntityMapper, UserRootEntityRepository],
})
export class UserModule {}
