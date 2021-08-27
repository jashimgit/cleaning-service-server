import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    price: String,
    status: String,
    imageUrl: String,
    details: String,
});

export default serviceSchema;
