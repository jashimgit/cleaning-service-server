/* eslint-disable prettier/prettier */
import express from 'express';
import {
    addNewOrder,
    changeOrderStatus,
    getAllOrder,
    // eslint-disable-next-line comma-dangle
    getOrderById, getPendingOrders
} from '../controllers/orderController';

const router = express.Router();

// get all order

router.get('/', getAllOrder);
router.post('/', addNewOrder);
router.get('/:id', getOrderById);
// router.put('/:id', updateSingleOrder);
// router.delete('/:id', deleteOrder);
router.put('/:id', changeOrderStatus);

router.get('/pending', getPendingOrders);

export default router;
