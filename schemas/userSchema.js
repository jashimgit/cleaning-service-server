import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    userRole: {
        type: String,
        default: 'user',
    },
    photoUrl: {
        type: String,
        default: null,
    },
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
