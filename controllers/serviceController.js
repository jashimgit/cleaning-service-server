import models from '../models';

const { Service } = models;

// get all service

export const getAllService = (req, res) => {
    try {
        const service = Service.find();
        res.status(200).json({
            message: 'ok',
            data: service,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getSingleService = (req, res) => {
    res.send('single service');
};

export const addNewService = (req, res) => {
    try {
        const service = Service.find();
        res.status(200).json({
            message: 'ok',
            data: service,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
