import { v1 as uuidv1 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';

import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { GenericTypeOrmRepo } from 'src/common/infra/typeorm/GenericTypeOrmRepo';
import { UserRootEntity } from './UserRootEntity';
import { UserEntityMapper } from './UserEntityMapper';

@Injectable()
export class UserRepository extends GenericTypeOrmRepo<
  User,
  UserId,
  UserRootEntity
> {
  constructor(mapper: UserEntityMapper) {
    super(mapper);
  }

  nextId(): UserId {
    return new UserId(uuidv1());
  }
}
