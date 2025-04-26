import express from 'express';
import router from express.Router();
import showSpent from '../controllers/ShowSpentController';

router.post('/show-spent', showSpent);

module.exports=router;

