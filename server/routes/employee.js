import express from 'express';
import { employee, ApiNotSupport } from '../controllers';

const router = express.Router();

router.get('/', employee.getListOffsetLimit);
router.post('/', employee.create);
router.get('/:id', employee.findById);
router.put('/:id', employee.updateById);
router.delete('/:id', employee.deleteById);

router.get('/:id/projects', employee.getProjects);
router.get('/:id/*', ApiNotSupport);


export default router;
