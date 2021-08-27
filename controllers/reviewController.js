/* eslint-disable no-unused-vars */
import models from '../models';

const { Review } = models;

export const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({
            message: 'success',
            data: reviews,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

export const addNewReview = (req, res) => {
    res.send('add new review');
};
