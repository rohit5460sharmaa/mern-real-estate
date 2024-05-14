import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);//verify token for that user are correct or not
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;