/* eslint-disable no-unused-vars */
import models from '../models';

const { Service } = models;

// get all service

export const getAllService = async (req, res) => {
    try {
        const service = await Service.find({});
        res.status(200).json({
            message: 'success',
            data: service,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

export const getSingleService = async (req, res) => {
    try {
        const service = await Service.findById({ _id: req.params.id });
        res.status(200).json({
            message: 'success',
            service,
        });
    } catch (err) {
        res.status(500).json({
            message: 'sorry no service found',
        });
    }
};

export const addNewService = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const Newservice = new Service(data);
        await Newservice.save();
        res.status(200).json({
            message: 'ok',
            data: Newservice,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export const deleteSingleService = async (req, res) => {
    // console.log(req.body, req.params.id);
    await Service.findOneAndDelete(req.params.id);
};
