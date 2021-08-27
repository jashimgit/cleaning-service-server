/* eslint-disable new-cap */
import mongoose from 'mongoose';
import schema from '../schemas';

const Review = new mongoose.model('Review', schema.reviewSchema);

export default Review;
