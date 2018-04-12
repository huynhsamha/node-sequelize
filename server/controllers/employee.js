import { Employee, Department, Project, WorksOn } from '../models';

function create(req, res) {
  const {
    first_name, last_name, ssn, salary, department_id, supervisor_id
  } = req.body;

  return Employee.create({
    first_name, last_name, ssn, salary, department_id, supervisor_id
  })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

function getListOffsetLimit(req, res) {
  const { offset, limit } = req.query;
  return Employee.findAll({
    include: [{
      model: Department,
      as: 'department'
    }],
    offset,
    limit
  })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

function findById(req, res) {
  const { id } = req.params;
  return Employee.findById(id, {
    include: [{
      model: Department,
      as: 'department'
    }, {
      model: Employee,
      as: 'supervisor'
    }]
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Employee not found' });
      }
      return res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
}

async function updateById(req, res) {
  const { id } = req.params;
  const new_values = req.body;
  try {
    let employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send({ message: 'Employee not found' });
    }
    employee = await employee.update(new_values);
    return res.status(200).send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send({ message: 'Employee not found' });
    }
    await employee.destroy();
    return res.status(204).send({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getProjects(req, res) {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send({ message: 'Employee not found' });
    }
    const projects = await employee.getProjects({
      attributes: ['id', 'name']
    });
    res.status(200).send(projects);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default {
  create, getListOffsetLimit, findById, updateById, deleteById,
  getProjects
};
