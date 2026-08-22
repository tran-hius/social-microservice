import { Router } from 'express';
import registerRoutes from './register.routes.js';
import loginRoutes from './login.routes.js';
import tokenRoutes from './token.routes.js';
import profileRoutes from './profile.routes.js';
import logoutRoutes from './logout.routes.js';

const router = Router();

router.use(registerRoutes);
router.use(loginRoutes);
router.use(tokenRoutes);
router.use(profileRoutes);
router.use(logoutRoutes);

export default router;
