import { DataSource, EntityTarget, FindOneOptions, Repository } from 'typeorm';
// import { Type } from '@nestjs/common';
import { AggregateRoot } from 'src/common/domain/AggregateRoot';
import { Identity } from 'src/common/domain/Identity';
// import { IGenericRepository } from 'src/common/domain/IGenericRepository';
import { RootTypeOrmEntity } from './RootTypeOrmEntity';
import { EntityMapper } from '../EntityMapper';
import { IGenericTypeOrmRepo } from './IGenericTypeOrmRepo';

export abstract class GenericTypeOrmRepo<
    TAgg extends AggregateRoot<TId>,
    TId extends Identity,
    TDalEntity extends RootTypeOrmEntity,
  >
  extends Repository<TDalEntity>
  implements IGenericTypeOrmRepo<TAgg, TId, TDalEntity>
{
  constructor(
    private readonly entity: EntityTarget<TDalEntity>,
    private readonly mapper: EntityMapper<TAgg, TId, TDalEntity>,
    private readonly dataSource: DataSource,
  ) {
    super(entity, dataSource.createEntityManager());
  }
  abstract nextId(): TId;

  async findOneAG(id: TId): Promise<TAgg | null> {
    const { key } = id;

    const findOption: FindOneOptions = { where: { id: key } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository.findOne(findOption);

    if (!entity) {
      return null;
    }

    return this.mapper.toAggregate(entity);
  }

  async saveAG(aggregate: TAgg): Promise<void> {
    const dalEntity = this.mapper.toDalEntity(aggregate);
    await this.getTypeOrmRepository().save(dalEntity);
  }

  async removeAG(aggregate: TAgg): Promise<void> {
    const dalEntity = this.mapper.toDalEntity(aggregate);
    await this.getTypeOrmRepository().remove(dalEntity);
  }

  private getTypeOrmRepository(): Repository<TDalEntity> {
    return this.dataSource.getRepository(this.entity);
  }
}
