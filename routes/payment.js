import express from 'express';
import payment from '../controllers/PaymentController';

const router =  express.Router();
router.post('/payment', payment);

export {router};
