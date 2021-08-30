import express from 'express';
import { getAllOrder, getOrderById, addNewOrder,changeOrderStatus } from '../controllers/orderController';

const router = express.Router();

// get all order

router.get('/', getAllOrder);
router.post('/', addNewOrder);
router.get('/:id', getOrderById)
// router.put('/:id', updateSingleOrder);
// router.delete('/:id', deleteOrder);
router.put('/:id', changeOrderStatus)

export default router;
