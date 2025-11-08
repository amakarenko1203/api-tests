import { z } from 'zod';

export const BrandSchema = z.object({
  id: z.number(),
  brand: z.string()
});

export const GetAllBrandsListResponseSchema = z.object({
  responseCode: z.number(),
  brands: z.array(BrandSchema)
});

export const MethodNotSupportedResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});
