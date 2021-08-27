/* eslint-disable no-unused-vars */
import models from '../models';

const { Order } = models;

// get all order

export const getAllOrder = (req, res) => {
    res.send('all order');
};

export const addNewOrder = (req, res) => {
    res.send('add new order');
};

export const updateSingleOrder = (req, res) => {
    res.send('update order by id');
};
