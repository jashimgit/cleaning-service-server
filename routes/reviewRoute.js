import express from 'express';
import { addNewReview, getAllReview } from '../controllers/reviewController';

const router = express.Router();

router.get('/', getAllReview);
router.post('/', addNewReview);

export default router;
