import { Router } from 'express';
import { loginController } from '../controllers';
import { validateDto } from '../middlewares/validation.middleware';
import { LoginDto } from '../dtos';

const router = Router();

router.post(
  '/login',
  validateDto(LoginDto),
  loginController.handle.bind(loginController)
);

export default router;
