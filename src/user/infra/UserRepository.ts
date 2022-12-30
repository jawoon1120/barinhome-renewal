import { v1 as uuidv1 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { GenericTypeOrmRepo } from 'src/common/infra/typeorm/GenericTypeOrmRepo';
import { UserRootEntity } from './UserRoot.entity';
import { UserEntityMapper } from './UserEntityMapper';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRootEntityRepository extends GenericTypeOrmRepo<
  User,
  UserId,
  UserRootEntity
> {
  constructor(mapper: UserEntityMapper, dataSource: DataSource) {
    super(UserRootEntity, mapper, dataSource);
  }

  nextId(): UserId {
    return new UserId(uuidv1());
  }
}
