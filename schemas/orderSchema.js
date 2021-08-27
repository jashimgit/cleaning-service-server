import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    serviceId: String,
    userId: String,
});

export default orderSchema;
