import { z } from 'zod';

export const ProductCategorySchema = z.object({
  usertype: z.object({
    usertype: z.string()
  }),
  category: z.string()
});

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  brand: z.string(),
  category: ProductCategorySchema
});

export const GetAllProductsListResponseSchema = z.object({
  responseCode: z.number(),
  products: z.array(ProductSchema)
});

export const MethodNotSupportedResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type Product = z.infer<typeof ProductSchema>;
export type GetAllProductsListResponse = z.infer<typeof GetAllProductsListResponseSchema>;
export type MethodNotSupportedResponse = z.infer<typeof MethodNotSupportedResponseSchema>;
