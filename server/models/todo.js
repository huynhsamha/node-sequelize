'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Todo = sequelize.define('Todo', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
});


export default Todo;
