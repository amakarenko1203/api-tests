import { z } from 'zod';

export const UserNotFoundResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});

export const BadRequestResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});

export const MethodNotSupportedResponseSchema = z.object({
  responseCode: z.number(),
  message: z.string()
});
