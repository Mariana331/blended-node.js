import { Router } from 'express';

import {
  userRegisterController,
  loginUserController,
  logoutUserController,
  refreshUsersSessionController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validatebody.js';
import { loginUserSchema } from '../validation/auth.js';

const router = Router();

router.post('/auth/register', ctrlWrapper(userRegisterController));
router.post(
  '/auth/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
router.post('/auth/logout', ctrlWrapper(logoutUserController));
router.post('/auth/refresh', ctrlWrapper(refreshUsersSessionController));

export default router;
