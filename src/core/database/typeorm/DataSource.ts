import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { getDataSourceOptions } from './DataSourceOption';
import path = require('path');

const datasourcePath = path.join(
  __dirname,
  '..',
  'configs',
  'env',
  `.${process.env.NODE_ENV}.env`,
);
config({ path: datasourcePath });

const configService = new ConfigService();
export default new DataSource(getDataSourceOptions(configService));
