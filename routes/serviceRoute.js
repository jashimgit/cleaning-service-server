/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import express from 'express';
import {
    addNewService,
    deleteSingleService,
    getAllService,
    getSingleService
} from '../controllers/serviceController';

const router = express.Router();

// get all service
router.get('/', getAllService);

// get single service
router.get('/:id', getSingleService);

// add new service
router.post('/', addNewService);

// update single service// delete single service
router.delete('/:id', deleteSingleService);

export default router;
