import express from 'express';
import { department, ApiNotSupport } from '../controllers';

const router = express.Router();

router.get('/', department.getListOffsetLimit);
router.post('/', department.create);
router.get('/:id', department.findById);
router.put('/:id', department.updateById);
router.delete('/:id', department.deleteById);

router.get('/:id/employees', department.getEmployees);
router.get('/:id/*', ApiNotSupport);


export default router;
