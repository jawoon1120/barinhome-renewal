import { AggregateRoot } from './AggregateRoot';
import { Identity } from './Identity';

export interface IGenericRepository<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
> {
  nextId: () => TId;
  findOneAG: (id: TId) => Promise<TAgg | null>;
  saveAG: (aggregate: TAgg) => Promise<void>;
  removeAG: (aggregate: TAgg) => Promise<void>;
}
