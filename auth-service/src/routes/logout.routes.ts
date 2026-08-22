import { Router } from 'express';
import { logoutController } from '../controllers/index.js';

const router = Router();

router.post('/logout', logoutController.logout.bind(logoutController));
router.post("/logout-all", logoutController.logoutAll.bind(logoutController));

export default router;
