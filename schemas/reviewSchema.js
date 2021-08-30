import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userEmail: String,
    reviewMsg: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

export default reviewSchema;
