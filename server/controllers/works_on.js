import { WorksOn, Employee, Project } from '../models';

function create(req, res) {
  const { employee_id, project_id, hours } = req.body;
  console.log(req.body);
  return WorksOn.create({ employee_id, project_id, hours })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

function getListOffsetLimit(req, res) {
  const { offset, limit } = req.query;
  return WorksOn
    .findAll({
      attributes: {
        exclude: ['employee_id', 'project_id']
      },
      include: [{
        model: Project,
        as: 'project',
        attributes: ['id', 'name']
      }, {
        model: Employee,
        as: 'employee',
        attributes: ['id', 'first_name', 'last_name']
      }],
      offset,
      limit
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

function findById(req, res) {
  const { id } = req.params;
  return WorksOn.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Works On not found' });
      }
      return res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
}

async function updateById(req, res) {
  const { id } = req.params;
  const new_values = req.body;
  try {
    let worksOn = await WorksOn.findById(id);
    if (!worksOn) {
      return res.status(404).send({ message: 'Works On not found' });
    }
    worksOn = await worksOn.update(new_values);
    return res.status(200).send(worksOn);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const worksOn = await WorksOn.findById(id);
    if (!worksOn) {
      return res.status(404).send({ message: 'Works On not found' });
    }
    await worksOn.destroy();
    return res.status(204).send({ message: 'Works On deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
}

export default {
  create, getListOffsetLimit, findById, updateById, deleteById
};
