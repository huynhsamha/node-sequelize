import express from 'express';
import { worksOn } from '../controllers';

const router = express.Router();

router.get('/', worksOn.getListOffsetLimit);
router.post('/', worksOn.create);
router.get('/:id', worksOn.findById);
router.put('/:id', worksOn.updateById);
router.delete('/:id', worksOn.deleteById);

export default router;
