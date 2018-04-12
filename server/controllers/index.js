import employee from './employee';
import department from './department';
import project from './project';
import worksOn from './works_on';

function ApiNotSupport(req, res) {
  res.status(400).send({ message: 'API not support' });
}

module.exports = {
  employee,
  department,
  project,
  worksOn,
  ApiNotSupport
};
