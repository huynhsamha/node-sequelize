'use strict';

import sequelize from '../config/sequelize';

import Department from './department';
import Employee from './employee';
import Project from './project';
import Works_On from './works_on';

/**
 * Relationship between Entities
 */

Department.hasMany(Employee, {
  as: 'Employees',
  foreignKey: 'department_id'
});
Employee.belongsTo(Department, {
  as: 'Department',
  foreignKey: 'department_id'
});

Department.belongsTo(Employee, {
  as: 'Manager',
  foreignKey: 'manager_id',
  constraints: false
});

Employee.belongsTo(Employee, {
  as: 'Supervisor',
  foreignKey: 'supervisor_id'
});

Project.belongsToMany(Employee, {
  through: Works_On,
  foreignKey: 'project_id'
});
Employee.belongsToMany(Project, {
  through: Works_On,
  foreignKey: 'employee_id'
});

export {
  Employee,
  Department,
  Project,
  Works_On
};

export default sequelize;
