import { IGenericRepository } from 'src/common/domain/IGenericRepository';
import { Repository } from 'typeorm';
import { AggregateRoot } from 'src/common/domain/AggregateRoot';
import { Identity } from 'src/common/domain/Identity';
import { RootTypeOrmEntity } from './RootTypeOrmEntity';

export interface IGenericTypeOrmRepo<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
  TDalEntity extends RootTypeOrmEntity,
> extends IGenericRepository<TAgg, TId>,
    Repository<TDalEntity> {
  //   this: Repository<TDalEntity>;
}
