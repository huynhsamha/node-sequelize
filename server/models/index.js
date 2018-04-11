'use strict';

import sequelize from '../config/sequelize';

import Todo from './todo';
import TodoItem from './todoitem';

/**
 * Relationship between Entities
 */

Todo.hasMany(TodoItem, {
  foreignKey: 'todoId',
  as: 'todoItems'
});

TodoItem.belongsTo(Todo, {
  foreignKey: 'todoId',
  onDelete: 'CASCADE'
});

export {
  Todo,
  TodoItem
};

export default sequelize;
