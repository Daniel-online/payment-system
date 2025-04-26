import express from 'express';
import router from express.Router();
import {pointsRate, limitValue} from '../controllers/SettingsController';

router.post('/settings/rate', pointsRate);
router.post('/settings/limit', limitValue)

module.exports=router;
