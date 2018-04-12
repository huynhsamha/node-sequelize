/**
 * Export sequelize after authenticate to database
 */

'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('./db')[env];

const { database, username, password } = config;

const sequelize = new Sequelize(
  database, username, password,
  config,
  {
    timezone: '+07:00'
  }
);

export default sequelize;
