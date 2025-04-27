import express from 'express';
import register from '../controllers/AuthController';

const router = express.Router();

router.post('/auth',register);

export {router};
