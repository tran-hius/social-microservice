import { Router } from 'express';
import { loginController } from '../controllers/index.js';
import { validateDto } from '../middlewares/validation.middleware.js';
import { LoginDto } from '../dtos/index.js';

const router = Router();

router.post(
  '/login',
  validateDto(LoginDto),
  loginController.handle.bind(loginController)
);

export default router;
