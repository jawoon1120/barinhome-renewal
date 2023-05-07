import { Column, Entity } from 'typeorm';
import { RootTypeOrmEntity } from 'src/common/infra/typeorm/RootTypeOrmEntity';

@Entity('user')
export class UserRootEntity extends RootTypeOrmEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  userId: string;

  @Column({ type: 'varchar', length: 512 })
  password: string;

  @Column({ type: 'varchar', length: 512 })
  signedInAt: Date;
}
