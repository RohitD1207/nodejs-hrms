# HRMS-Xpress

A simple Employee Management System built with Node.js, Express, and MongoDB.

## Features
- Add, edit, and delete employee records
- View employee details in a table format
- RESTful API with CRUD operations
- User authentication with JWT (Login, Registration, Logout)
- Secure environment variables for database credentials

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/RohitD1207/nodejs-hrms.git
   cd nodejs-hrms
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the `.env` file with your MongoDB connection string and JWT secret:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Visit `http://localhost:5000` in your browser.

## API Documentation

### Endpoints:
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /employees` - Get all employees (requires authentication)
- `POST /employees` - Add a new employee (requires authentication)
- `PUT /employees/:id` - Update an employee (requires authentication)
- `DELETE /employees/:id` - Remove an employee (requires authentication)

## Project Structure
```
nodejs-hrms/
├── models/         # Database models
├── public/         # Frontend static files (HTML, CSS, JS)
├── routes/         # API routes
├── middleware/     # Authentication middleware
├── index.js        # Main server file
├── package.json    # Dependencies
├── .env            # Environment variables
```

## Security Measures
- **Environment Variables:** Sensitive credentials like `MONGO_URI` and `JWT_SECRET` are stored in a `.env` file.
- **JWT Authentication:** Ensures only authorized users can access the system.
- **Secure Database Connection:** Removed deprecated MongoDB options for a stable and secure connection.

## Contributing
This project was originally developed by Rohit Dharmavaram. Contributions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).
