import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(createProductController));
router.patch('/products/:productId', ctrlWrapper(updateProductController));
router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
