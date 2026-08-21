import { Router } from 'express';
import { profileController } from '../controllers/index.js';

const router = Router();

router.get('/me', profileController.me.bind(profileController));

export default router;
