# ABAC Access Control System

## Description
This project demonstrates Attribute-Based Access Control (ABAC) using Node.js and Express. It controls access to resources based on user and resource attributes instead of fixed roles.

## Features
- Middleware-based access control
- Policy-driven authorization
- Attribute evaluation (user + resource)
- Simple REST API for testing

## Attributes Used
- User Attributes:
  - role (admin, user)
  - department (finance, sales)

- Resource Attributes:
  - sensitivity (low, high)

## Policies Implemented
- Admin users can write documents
- Finance department can read documents
- Documents with low sensitivity can be accessed by users

## API Endpoints

### GET /documents
- Description: Access document
- Result: 200 OK (Allowed)

### POST /documents
- Description: Create document
- Result: 403 Forbidden (Denied)

## Test Results

| Request | Status | Result |
|--------|--------|--------|
| GET /documents | 200 | Access granted |
| POST /documents | 403 | Access denied |

## Screenshots
Screenshots of API testing are included in the `/screenshots` folder.

## How to Run
```bash
npm install
node server.js
