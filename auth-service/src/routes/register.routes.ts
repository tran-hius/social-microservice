import { Router } from 'express';
import { registerController } from '../controllers';
import { validateDto } from '../middlewares/validation.middleware';
import { RegisterDto } from '../dtos';

const router = Router();

router.post(
  '/register',
  validateDto(RegisterDto),
  registerController.handle.bind(registerController)
);

export default router;
