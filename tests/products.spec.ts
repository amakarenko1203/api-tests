import { test, expect } from '@playwright/test';
import { GetAllProductsListResponseSchema, MethodNotSupportedResponseSchema } from '../schemas/products.schema';

test.describe('Get All Products List API', () => {
  
  test('should return all products with valid schema', async ({ request }) => {
    const response = await request.get('/api/productsList');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    const validatedData = GetAllProductsListResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(200);
    expect(validatedData.products.length).toBeGreaterThan(0);
  });

});

test.describe('POST To All Products List API', () => {
  
  test('should return 405 method not supported', async ({ request }) => {
    const response = await request.post('/api/productsList');
    
    expect(response.status()).toBe(405);
    
    const data = await response.json();
    const validatedData = MethodNotSupportedResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(405);
    expect(validatedData.message).toBe('This request method is not supported.');
  });

});
