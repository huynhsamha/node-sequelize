import express from 'express';
import { project, ApiNotSupport } from '../controllers';

const router = express.Router();

router.get('/', project.getListOffsetLimit);
router.post('/', project.create);
router.get('/:id', project.findById);
router.put('/:id', project.updateById);
router.delete('/:id', project.deleteById);

router.get('/:id/employees', project.getEmployees);
router.get('/:id/*', ApiNotSupport);


export default router;
