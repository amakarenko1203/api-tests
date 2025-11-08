import { test, expect } from '@playwright/test';
import { UserNotFoundResponseSchema, BadRequestResponseSchema, MethodNotSupportedResponseSchema } from '../schemas/verifyLogin.schema';

test.describe('POST To Verify Login with valid details API', () => {
  
  test('should return 404 user not found', async ({ request }) => {
    const response = await request.post('/api/verifyLogin', {
      form: {
        email: 'test@example.com',
        password: 'password123'
      }
    });
    
    expect(response.status()).toBe(404);
    
    const data = await response.json();
    const validatedData = UserNotFoundResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(404);
    expect(validatedData.message).toBe('User not found!');
  });

});

test.describe('POST To Verify Login without email parameter API', () => {
  
  test('should return 400 bad request', async ({ request }) => {
    const response = await request.post('/api/verifyLogin', {
      form: {
        password: 'password123'
      }
    });
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    const validatedData = BadRequestResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(400);
    expect(validatedData.message).toBe('Bad request, email or password parameter is missing in POST request.');
  });

});

test.describe('DELETE To Verify Login API', () => {
  
  test('should return 405 method not supported', async ({ request }) => {
    const response = await request.delete('/api/verifyLogin');
    
    expect(response.status()).toBe(405);
    
    const data = await response.json();
    const validatedData = MethodNotSupportedResponseSchema.parse(data);
    
    expect(validatedData.responseCode).toBe(405);
    expect(validatedData.message).toBe('This request method is not supported.');
  });

});
