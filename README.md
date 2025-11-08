# API Testing with Playwright, TypeScript, Zod & Faker

Complete API testing framework for automationexercise.com using Playwright with TypeScript, Zod schema validation, and Faker for test data generation.

## Project Structure

```
api-tests/
├── tests/
│   └── example.spec.ts       # API test examples
├── schemas/
│   └── example.schema.ts     # Zod schemas for validation
├── .env.example               # Environment variables template
├── .gitignore
├── package.json
├── playwright.config.ts       # Playwright configuration
└── tsconfig.json             # TypeScript configuration
```

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
copy .env.example .env
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in UI mode:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

Debug tests:
```bash
npm run test:debug
```

View test report:
```bash
npm run test:report
```

## Features

- ✅ **TypeScript** - Full type safety
- ✅ **Zod Schemas** - Runtime validation of API responses
- ✅ **Faker** - Dynamic test data generation
- ✅ **Playwright** - Powerful API testing capabilities
- ✅ **Environment Configuration** - Using dotenv

## Test Coverage

The test suite covers all 14 API endpoints:

1. GET /productsList - Get all products
2. POST /productsList - Method not supported
3. GET /brandsList - Get all brands
4. PUT /brandsList - Method not supported
5. POST /searchProduct - Search products
6. POST /searchProduct - Missing parameter validation
7. POST /verifyLogin - Valid credentials
8. POST /verifyLogin - Missing email parameter
9. DELETE /verifyLogin - Method not supported
10. POST /verifyLogin - Invalid credentials
11. POST /createAccount - Create user account
12. DELETE /deleteAccount - Delete user account
13. PUT /updateAccount - Update user account
14. GET /getUserDetailByEmail - Get user details

## Schema Validation

All API responses are validated using Zod schemas defined in `schemas/example.schema.ts`. This ensures type safety and catches unexpected API changes.

## Test Data Generation

Test data is dynamically generated using Faker.js, ensuring unique data for each test run and reducing test maintenance.
