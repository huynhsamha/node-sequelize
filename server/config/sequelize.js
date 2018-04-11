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

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
