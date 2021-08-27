import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    reviewMsg: String,
});

export default reviewSchema;
