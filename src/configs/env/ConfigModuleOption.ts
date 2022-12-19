import * as Joi from 'joi';

export const ConfigModuleOption = {
  RDS_USERNAME: Joi.string().required(),
  RDS_PASSWORD: Joi.string().required(),
  RDS_PORT: Joi.number().required(),
  RDS_HOSTNAME: Joi.string().required(),
  RDS_DB_NAME: Joi.string().required(),
};
