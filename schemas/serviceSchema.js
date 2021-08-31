import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    price: String,
    status: String,
    imageUrl: String,
    details: { type: String, max: 80 },
});

export default serviceSchema;
