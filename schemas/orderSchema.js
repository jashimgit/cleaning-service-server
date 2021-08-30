import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    serviceId: String,
    serviceName: String,
    price: String,
    quantity: Number,
    customerEmail: {
        type: String,
        default: 'user@example.com'
    },
    orderTime: String,
    status: String,
});

export default orderSchema;
