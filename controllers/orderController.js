/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import models from '../models';

const { Order } = models;

// get all order

export const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json({
            orders,
            message: 'success',
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

export const addNewOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const ret = await newOrder.save(newOrder);

        res.status(200).json({
            message: 'success',
        });
    } catch (err) {
        res.status(500).json({
            message: 'server error',
        });
    }
};

export const updateSingleOrder = (req, res) => {
    res.send('update order by id');
};
export const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById({ _id: id });
        res.status(200).json({
            order,
        });
    } catch (err) {
        res.status(500).json({
            message: 'server side error',
        });
    }
};

// change order status

export const changeOrderStatus = async (req, res) => {
    const status = req.body;
    const { id } = req.params;
    // console.log(id, status);
    // Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)
    const updatedData = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    console.log(updatedData);
};
