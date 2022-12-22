import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export function getDataSourceOptions(
  configService: ConfigService,
): DataSourceOptions {
  return {
    name: 'default',
    type: 'mysql',
    host: configService.get('RDS_HOSTNAME'),
    port: configService.get('RDS_PORT'),
    database: configService.get('RDS_DB_NAME'),
    username: configService.get('RDS_USERNAME'),
    password: configService.get('RDS_PASSWORD'),
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    logging: ['error', 'schema'],
    timezone: 'Asia/Seoul',
  };
}

// following function is for NestJS bootstrapping...
export function getTypeOrmModuleOptionsFactory(
  configService: ConfigService,
): (...args: any[]) => Promise<TypeOrmModuleOptions> {
  return async () => getDataSourceOptions(configService);
}
