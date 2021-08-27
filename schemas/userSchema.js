import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    photoUrl: String,
    status: {
        type: String,
        default: 'active',
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
export default userSchema;
