'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Employee = sequelize.define('Employee', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ssn: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  salary: {
    type: Sequelize.FLOAT
  },
  department_id: {
    type: Sequelize.INTEGER
  },
  supervisor_id: {
    type: Sequelize.INTEGER
  }
}, {
});


export default Employee;
