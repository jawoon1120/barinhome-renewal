import { FindOneOptions, Repository } from 'typeorm';
import { Inject, Type } from '@nestjs/common';

import { MysqlDataSource } from 'src/core/database/typeorm/TypeOrmDatabase';

import { AggregateRoot } from 'src/common/domain/AggregateRoot';
import { Identity } from 'src/common/domain/Identity';
import { IGenericRepository } from 'src/common/domain/IGenericRepository';
import { RootTypeOrmEntity } from './RootTypeOrmEntity';
import { EntityMapper } from '../EntityMapper';

export abstract class GenericTypeOrmRepo<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
  TDalEntity extends RootTypeOrmEntity,
> implements IGenericRepository<TAgg, TId>
{
  constructor(private readonly mapper: EntityMapper<TAgg, TId, TDalEntity>) {}

  abstract nextId(): TId;

  async findOne(id: TId): Promise<TAgg | null> {
    const { key } = id;

    const findOption: FindOneOptions = { where: { id: key } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository.findOne(findOption);

    if (!entity) {
      return null;
    }

    return this.mapper.toAggregate(entity);
  }

  async save(aggregate: TAgg): Promise<void> {
    const dalEntity = this.mapper.toDalEntity(aggregate);
    await this.getTypeOrmRepository().save(dalEntity);
  }

  async remove(aggregate: TAgg): Promise<void> {
    const dalEntity = this.mapper.toDalEntity(aggregate);
    await this.getTypeOrmRepository().remove(dalEntity);
  }

  private getEntityType(): Type<TDalEntity> {
    return Reflect.getMetadata(this.constructor.name, this.constructor);
  }

  private getTypeOrmRepository(): Repository<TDalEntity> {
    return this.getTypeOrmRepository();
  }
}
