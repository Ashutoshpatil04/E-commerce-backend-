# E-commerce Backend API

A robust e-commerce backend built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup/Login)
- Product Management
- Shopping Cart
- JWT Authentication
- MongoDB Integration

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `POST /api/products/:id/reviews` - Add product review

### Cart
- `GET /api/cart` - View cart
- `POST /api/cart/add` - Add to cart
- `PUT /api/cart/update/:productId` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove from cart
- `DELETE /api/cart/clear` - Clear cart

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=30d
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose
- bcryptjs
- cors

## Database Schema

### User
- name
- fatherName
- dob
- branch
- rollNo
- section
- address
- mobileNo
- password

### Product
- title
- price
- description
- category
- image
- rating
- discount
- offerPrice
- reviews

### Cart
- user
- items
- totalAmount

## API Testing

Use Postman or any API testing tool. Example requests are provided in the documentation. 