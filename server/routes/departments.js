import express from 'express';
import { departments } from '../controllers';

const router = express.Router();

router.get('/', departments.getListOffsetLimit);
router.post('/', departments.create);
router.get('/:id', departments.findById);
router.put('/:id', departments.updateById);

export default router;
