# Node.js Authentication and CRUD API

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file and add the following variables:
- PORT
- DATABASE
- DATABASE_PASSWORD
- JWT_SECRET

4. Run the server: `npm start`.

## Testing

Use Postman or curl scripts to test the API endpoints. A Postman collection is included in the repository.

## API Endpoints

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.
- `GET /api/users` - Get all users (admin only).
- `GET /api/users/:id` - Get user by ID.
- `PUT /api/users/:id` - Update user by ID.
- `DELETE /api/users/:id` - Delete user by ID (admin only).
