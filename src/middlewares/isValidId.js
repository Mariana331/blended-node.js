import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = async (req, res, next) => {
  const { productId } = req.params;
  if (!productId) {
    createHttpError(400, 'BadRequest');
  }
};
