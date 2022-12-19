import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { UserModule } from './user/user.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { RefrigeratorModule } from './refrigerator/refrigerator.module';
import path = require('path');
import { ConfigModuleOption } from '../src/configs/env/ConfigModuleOption';
const boundedContextModule = [
  CocktailModule,
  UserModule,
  RecommendationModule,
  RefrigeratorModule,
];

const datasourcePath = path.join(
  __dirname,
  '..',
  'configs',
  'env',
  `.${process.env.NODE_ENV}.env`,
);

@Module({
  imports: [
    ...boundedContextModule,
    ConfigModule.forRoot({
      envFilePath: datasourcePath,
      ...ConfigModuleOption,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
