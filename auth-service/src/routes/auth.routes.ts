import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { validateDto } from '../middlewares/validation.middleware';
import { RegisterDto, LoginDto, RefreshTokenDto } from '../dtos';

const router = Router();

router.post(
  '/register',
  validateDto(RegisterDto),
  authController.register.bind(authController)
);

router.post(
  '/login',
  validateDto(LoginDto),
  authController.login.bind(authController)
);

router.post(
  '/refresh',
  validateDto(RefreshTokenDto),
  authController.refresh.bind(authController)
);

router.post('/logout', authController.logout.bind(authController));
router.post('/logout-all', authController.logoutAll.bind(authController));
router.get('/me', authController.me.bind(authController));

export default router;
