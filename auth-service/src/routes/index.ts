import { Router } from 'express';
import registerRoutes from './register.routes';
import loginRoutes from './login.routes';
import tokenRoutes from './token.routes';
import profileRoutes from './profile.routes';

const router = Router();

router.use(registerRoutes);
router.use(loginRoutes);
router.use(tokenRoutes);
router.use(profileRoutes);

export default router;
