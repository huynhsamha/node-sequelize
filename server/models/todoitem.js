'use strict';

import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const TodoItem = sequelize.define('TodoItem', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  complete: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  todoId: {
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'Todos',
      key: 'id',
      as: 'todoId'
    }
  }
}, {
});


export default TodoItem;
