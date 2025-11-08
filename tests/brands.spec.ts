import { test, expect } from '@playwright/test';
import { GetAllBrandsListResponseSchema, MethodNotSupportedResponseSchema } from '../schemas/brands.schema';

test.describe('Get All Brands List API', () => {
  
  test('should return all brands with valid schema', async ({ request }) => {
    const response = await request.get('/api/brandsList');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    const validatedData = GetAllBrandsListResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(200);
    expect(validatedData.brands.length).toBeGreaterThan(0);
  });

});

test.describe('PUT To All Brands List API', () => {
  
  test('should return 405 method not supported', async ({ request }) => {
    const response = await request.put('/api/brandsList');
    
    expect(response.status()).toBe(405);
    
    const data = await response.json();
    const validatedData = MethodNotSupportedResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(405);
    expect(validatedData.message).toBe('This request method is not supported.');
  });

});
