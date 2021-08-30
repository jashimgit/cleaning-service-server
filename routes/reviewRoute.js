import express from 'express';
import { addNewReview, getAllReview } from '../controllers/reviewController';
import checkLogin from '../middleware/checkLogin';

const router = express.Router();

router.get('/', getAllReview);
router.post('/', checkLogin, addNewReview);

export default router;
