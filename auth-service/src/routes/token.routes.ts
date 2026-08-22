import { Router } from 'express';
import { tokenController } from '../controllers/index.js';
import { validateDto } from '../middlewares/validation.middleware.js';
import { RefreshTokenDto } from '../dtos/index.js';

const router = Router();

router.post(
  '/refresh',
  validateDto(RefreshTokenDto),
  tokenController.refresh.bind(tokenController)
);

export default router;
