'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

import Employee from './employee';

const Department = sequelize.define('Department', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  manager_id: {
    type: Sequelize.INTEGER
  }
}, {
});


export default Department;
