import { Router } from 'express';

import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { validateBody } from '../middlewares/validatebody.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get(
  '/products/:productId',
  isValidId,
  ctrlWrapper(getProductByIdController),
);
router.post(
  '/products',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);
router.patch(
  '/products/:productId',
  isValidId,
  validateBody(updateProductSchema),
  ctrlWrapper(updateProductController),
);
router.delete(
  '/products/:productId',
  isValidId,
  ctrlWrapper(deleteProductController),
);

export default router;
