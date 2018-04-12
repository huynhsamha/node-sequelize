'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Works_On = sequelize.define('Works_On', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  employee_id: {
    type: Sequelize.INTEGER
  },
  project_id: {
    type: Sequelize.INTEGER
  },
  hours: {
    type: Sequelize.INTEGER,
    comment: 'Hours per week'
  }
}, {
});


export default Works_On;
