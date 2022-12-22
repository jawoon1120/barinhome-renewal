import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { getDataSourceOptions } from './DataSourceOption';

@Injectable()
export class TypeOrmDatabase implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const option = getDataSourceOptions(this.configService);
    await new DataSource(option).initialize();
  }
}
