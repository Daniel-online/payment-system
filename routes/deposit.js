import express from 'express';
import router from express.Router();
import deposit from '../controllers/DepositController';

router.post('/deposit', deposit);

module.exports=router;
