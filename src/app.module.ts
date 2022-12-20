import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { UserModule } from './user/user.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { RefrigeratorModule } from './refrigerator/refrigerator.module';
import path = require('path');
import Joi = require('joi');
import { CoreModule } from './core/core.module';

const boundedContextModule = [
  CocktailModule,
  UserModule,
  RecommendationModule,
  RefrigeratorModule,
];

const envPath = path.join(
  __dirname,
  'configs',
  'env',
  `${process.env.NODE_ENV}.env`,
);

@Module({
  imports: [
    CoreModule,
    ...boundedContextModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envPath,
      validationSchema: Joi.object({
        RDS_USERNAME: Joi.string().required(),
        RDS_PASSWORD: Joi.string().required(),
        RDS_PORT: Joi.number().required(),
        RDS_HOSTNAME: Joi.string().required(),
        RDS_DB_NAME: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
