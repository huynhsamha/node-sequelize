import { Project } from '../models';

function create(req, res) {
  const { name } = req.body;
  return Project.create({ name })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

function getListOffsetLimit(req, res) {
  const { offset, limit } = req.query;
  return Project
    .findAll({ offset, limit })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

function findById(req, res) {
  const { id } = req.params;
  return Project.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Project not found' });
      }
      return res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
}

async function updateById(req, res) {
  const { id } = req.params;
  const new_values = req.body;
  try {
    let project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ message: 'Project not found' });
    }
    project = await project.update(new_values);
    return res.status(200).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ message: 'Project not found' });
    }
    await project.destroy();
    return res.status(204).send({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getEmployees(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ message: 'Project not found' });
    }
    const employees = await project.getEmployees({
      attributes: ['id', 'first_name', 'last_name', 'department_id']
    });
    res.status(200).send(employees);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default {
  create, getListOffsetLimit, findById, updateById, deleteById,
  getEmployees
};
