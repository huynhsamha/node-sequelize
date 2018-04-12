import { Employee, Department } from '../models';

function create(req, res) {
  const { name, start_date, manager_id } = req.body;
  return Department.create({ name, start_date, manager_id })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

function getListOffsetLimit(req, res) {
  const { offset, limit } = req.query;
  return Department
    .findAll({
      include: [{
        model: Employee,
        as: 'Manager'
      }],
      offset,
      limit
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

function findById(req, res) {
  const { id } = req.params;
  return Department.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Department not found' });
      }
      return res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
}

async function updateById(req, res) {
  const { id } = req.params;
  const new_values = req.body;
  try {
    let department = await Department.findById(id);
    if (!department) {
      return res.status(404).send({ message: 'Employee not found' });
    }
    department = await department.update(new_values);
    return res.status(200).send(department);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default {
  create, getListOffsetLimit, findById, updateById
};
