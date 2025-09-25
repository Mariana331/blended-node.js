import { ProductsCollection } from '../db/model/products.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (_id) => {
  const product = await ProductsCollection.findById();
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};

export const updateProduct = async (productId, payload) => {
  const product = await ProductsCollection.findByIdAndUpdate(
    productId,
    payload,
  );
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await ProductsCollection.findByIdAndDelete(productId);
  return product;
};
