import express from 'express';
import { addNewService, getAllService, getSingleService } from '../controllers/serviceController';

const router = express.Router();

// get all service
router.get('/', getAllService);

// get single service
router.get('/:id', getSingleService);

// add new service
router.post('/', addNewService);

// update single service// delete single service

export default router;
