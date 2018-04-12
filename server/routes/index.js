import express from 'express';
import employee from './employee';
import department from './department';
import project from './project';
import worksOn from './works_on';
import { ApiNotSupport } from '../controllers';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/api/v1/employees', employee);
router.use('/api/v1/departments', department);
router.use('/api/v1/projects', project);
router.use('/api/v1/works_ons/', worksOn);
router.use('/api/v1/*', ApiNotSupport);


export default router;
