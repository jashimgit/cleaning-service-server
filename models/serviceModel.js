/* eslint-disable new-cap */
import mongoose from 'mongoose';
import schema from '../schemas';

const Service = new mongoose.model('Service', schema.serviceSchema);
export default Service;
