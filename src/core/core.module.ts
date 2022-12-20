import { Module } from '@nestjs/common';
import { TypeOrmDatabase } from './database/typeorm/TypeOrmDatabase';

@Module({
  providers: [TypeOrmDatabase],
  exports: [TypeOrmDatabase],
})
export class CoreModule {}
