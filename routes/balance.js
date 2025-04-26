import express from 'express';
import router from express.Router();
import balance from '../controllers/BalanceController';

router.post('/balance', balance);

module.exports=router;
