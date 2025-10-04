import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().integer().min(6).max(16).required(),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .required(),
  description: Joi.string(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  price: Joi.number().integer().min(6).max(16),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
});
