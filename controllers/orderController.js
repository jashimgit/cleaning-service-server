/* eslint-disable no-unused-vars */
import models from '../models';

const { Order } = models;

// get all order

export const getAllOrder = async (req, res) => {
    try{
        const orders = await Order.find({});
        res.status(200).json({
            orders,
            message: 'success'
        })
    } catch(err) {
        res.status(500).json({
            message: err
        })
    }
};

export const addNewOrder = async (req, res) => {
    console.log(req.body)
    const newOrder = new Order(req.body);
    
    try {
        const ret = await newOrder.save(newOrder);
        // console.log(ret)
        res.status(200).json({
            message: 'success'
        })
    } catch(err) {
        res.status(500).json({
            message: 'server error'
        })
    }
};

export const updateSingleOrder = (req, res) => {
    res.send('update order by id');
};


export const getOrderById = async (req, res) => {
    const id = req.params.id;
    
    try{
        const order = await Order.findById({_id: id})
        res.status(200).json({
            order
        })
    } catch(err) {
        res.status(500).json({
            message: 'server side error'
        })
    }
}

// change order status

export const changeOrderStatus = async(req, res) => {
    const id = req.params.id;
    try{
        const updatedStatus = await Order.findOneAndUpdate({_id: id}, { $set: { status: req.body }}, {new: true})
        res.status(200).json({
            updatedStatus,
        })
    } catch(err){
        res.status(500).json({
            message: 'server side error'
        })
    }

}