import express from 'express';
import router from express.Router();
import payment from '../controllers/PaymentController';

router.post('/payment', payment);

module.exports=router;
