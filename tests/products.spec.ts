import { test, expect } from '@playwright/test';
import { GetAllProductsListResponseSchema } from '../schemas/products.schema';

test.describe('Get All Products List API', () => {
  
  test('should return all products with valid schema', async ({ request }) => {
    const response = await request.get('/productsList');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    const validatedData = GetAllProductsListResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(200);
    expect(validatedData.products.length).toBeGreaterThan(0);
  });

});
