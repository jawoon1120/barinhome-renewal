import { User } from './User';
import { UserId } from './UserId';
import { IGenericTypeOrmRepo } from 'src/common/infra/typeorm/IGenericTypeOrmRepo';
import { UserRootEntity } from '../infra/UserRoot.entity';

export const UserRepositoryKey = 'UserRepository';

export interface IUserTypeOrmRepo
  extends IGenericTypeOrmRepo<User, UserId, UserRootEntity> {}
