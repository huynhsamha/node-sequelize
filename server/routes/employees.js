import express from 'express';
import { employees } from '../controllers';

const router = express.Router();

router.get('/', employees.getListOffsetLimit);
router.post('/', employees.create);
router.get('/:id', employees.findById);
router.put('/:id', employees.updateById);

export default router;
