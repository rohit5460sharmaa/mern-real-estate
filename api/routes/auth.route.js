import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Middleware to parse JSON request bodies
router.use(express.json());

// Route for handling user sign-up requests
router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut);
export default router;

