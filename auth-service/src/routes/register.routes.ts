import { Router } from 'express';
import { registerController } from '../controllers/index.js';
import { validateDto } from '../middlewares/validation.middleware.js';
import { RegisterDto } from '../dtos/index.js';

const router = Router();

router.post(
  '/register',
  validateDto(RegisterDto),
  registerController.handle.bind(registerController)
);

export default router;
