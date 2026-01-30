# Le Vieux Grimoire

A full-stack web application for a bookstore specializing in rare and antique books, developed as part of the OpenClassrooms Web Developer program.

## Overview

Le Vieux Grimoire is a book rating platform where users can browse books, add new ones, and rate them. The application features user authentication, image optimization, and a RESTful API.

## Features

- User authentication (signup/login)
- Browse book catalog
- View detailed book information
- Add new books with cover images
- Rate books (1-5 stars)
- View best-rated books
- Image optimization with Sharp

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Multer (file upload)
- Sharp (image optimization)
- bcrypt (password hashing)

### Frontend
- React
- React Router
- CSS Modules
- Axios

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local MongoDB instance

### Backend Setup

1. Navigate to backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your configuration
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/signup | Create new user |
| POST | /api/auth/login | User login |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get single book |
| POST | /api/books | Add new book |
| PUT | /api/books/:id | Update book |
| DELETE | /api/books/:id | Delete book |
| POST | /api/books/:id/rating | Rate a book |
| GET | /api/books/bestrating | Get top rated books |

## Author

**Karim Lamari** - Junior Web Developer

- GitHub: [@karimLamari](https://github.com/karimLamari)
- LinkedIn: [Karim Lamari](https://www.linkedin.com/in/karim-lamari-0944a32b6/)
