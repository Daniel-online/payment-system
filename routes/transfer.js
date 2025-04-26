import express from 'express';
import router from express.Router();
import transfer from '../controllers/TransferController';

router.post('/transfer', transfer);

module.exports=router;
