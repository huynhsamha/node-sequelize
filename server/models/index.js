'use strict';

import sequelize from '../config/sequelize';

import Department from './department';
import Employee from './employee';
import Project from './project';
import WorksOn from './works_on';

/**
 * Relationship between Entities
 */

Department.hasMany(Employee, {
  as: 'employees',
  foreignKey: 'department_id'
});
Employee.belongsTo(Department, {
  as: 'department',
  foreignKey: 'department_id'
});

Department.belongsTo(Employee, {
  as: 'manager',
  foreignKey: 'manager_id',
  constraints: false
});

Employee.belongsTo(Employee, {
  as: 'supervisor',
  foreignKey: 'supervisor_id'
});

Project.belongsToMany(Employee, {
  through: WorksOn,
  foreignKey: 'project_id'
});
Employee.belongsToMany(Project, {
  through: WorksOn,
  foreignKey: 'employee_id'
});
WorksOn.belongsTo(Employee, {
  as: 'employee',
  foreignKey: 'employee_id'
});
WorksOn.belongsTo(Project, {
  as: 'project',
  foreignKey: 'project_id'
});


export {
  Employee,
  Department,
  Project,
  WorksOn
};

export default sequelize;
