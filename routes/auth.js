import express from 'express';
import router from express.Router();
import register from '../controllers/AuthController';

router.post('/auth',register);

module.exports=router;
