import express from 'express';
import { getAllOrder } from '../controllers/orderController';

const router = express.Router();

// get all order

router.get('/', getAllOrder);
// router.post('/', addNewOrder);
// router.put('/:id', updateSingleOrder);
// router.delete('/:id', deleteOrder);

export default router;
