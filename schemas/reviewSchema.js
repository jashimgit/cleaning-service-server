import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userEmail: String,
    reviewMsg: String,
});

export default reviewSchema;
