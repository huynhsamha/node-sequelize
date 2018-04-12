'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Project = sequelize.define('Project', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
});


export default Project;
