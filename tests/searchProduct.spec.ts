import { test, expect } from '@playwright/test';
import { SearchProductResponseSchema, BadRequestResponseSchema } from '../schemas/searchProduct.schema';

test.describe('POST To Search Product API', () => {
  
  test('should return searched products with valid schema', async ({ request }) => {
    const response = await request.post('/api/searchProduct', {
      form: {
        search_product: 'top'
      }
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    const validatedData = SearchProductResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(200);
    expect(validatedData.products.length).toBeGreaterThan(0);
  });

});

test.describe('POST To Search Product without search_product parameter API', () => {
  
  test('should return 400 bad request', async ({ request }) => {
    const response = await request.post('/api/searchProduct');
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    const validatedData = BadRequestResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(400);
    expect(validatedData.message).toBe('Bad request, search_product parameter is missing in POST request.');
  });

});
