/* eslint-disable new-cap */
import mongoose from 'mongoose';
import schema from '../schemas';

const User = new mongoose.model('User', schema.userSchema);

export default User;
