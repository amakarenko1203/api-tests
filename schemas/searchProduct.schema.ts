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

export const SearchProductResponseSchema = z.object({
  responseCode: z.number(),
  products: z.array(ProductSchema)
});

export const BadRequestResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});
