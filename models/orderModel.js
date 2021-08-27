/* eslint-disable new-cap */
import mongoose from 'mongoose';
import schema from '../schemas';

const Order = new mongoose.model('Order', schema.orderSchema);

export default Order;
