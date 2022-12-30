import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { getDataSourceOptions } from './DataSourceOption';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => getDataSourceOptions(configService),

  dataSourceFactory: async (option) => {
    const dataSource = await new DataSource(option).initialize();
    return dataSource;
  },
};
