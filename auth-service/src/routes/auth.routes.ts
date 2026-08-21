import { Router } from 'express';
import {
  registerController,
  loginController,
  tokenController,
  profileController,
} from '../controllers';
import { validateDto } from '../middlewares/validation.middleware';
import { RegisterDto, LoginDto, RefreshTokenDto } from '../dtos';

const router = Router();

router.post(
  '/register',
  validateDto(RegisterDto),
  registerController.handle.bind(registerController)
);

router.post(
  '/login',
  validateDto(LoginDto),
  loginController.handle.bind(loginController)
);

router.post(
  '/refresh',
  validateDto(RefreshTokenDto),
  tokenController.refresh.bind(tokenController)
);

router.post('/logout', tokenController.logout.bind(tokenController));
router.post('/logout-all', tokenController.logoutAll.bind(tokenController));
router.get('/me', profileController.me.bind(profileController));

export default router;
