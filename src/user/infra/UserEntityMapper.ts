import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { EntityMapper } from 'src/common/infra/EntityMapper';
import { UserRootEntity } from './UserRootEntity';

@Injectable()
export class UserEntityMapper extends EntityMapper<
  User,
  UserId,
  UserRootEntity
> {
  toAggregate(dalEntity: UserRootEntity): User {
    const { id, name, userId, password, createdAt, updatedAt, deletedAt } =
      dalEntity;

    return new User(
      new UserId(id),
      name,
      userId,
      password,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toDalEntity(aggregate: User): UserRootEntity {
    const rootDalEntity = new UserRootEntity();
    rootDalEntity.id = aggregate.id.key;
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.userId = aggregate.getUserId();
    rootDalEntity.password = aggregate.getPassWord();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
