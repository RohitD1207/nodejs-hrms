# HRMS-Xpress

A simple Employee Management System built with Node.js, Express, and MongoDB.

## Features
- Add, edit, and delete employee records
- View employee details in a table format
- RESTful API with CRUD operations
- JWT authentication (upcoming feature)

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
3. Set up the `.env` file with your MongoDB connection string:
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
- `GET /employees` - Get all employees
- `POST /employees` - Add a new employee
- `PUT /employees/:id` - Update an employee
- `DELETE /employees/:id` - Remove an employee

## Project Structure
```
nodejs-hrms/
├── models/         # Database models
├── public/         # Frontend static files (HTML, CSS, JS)
├── routes/         # API routes
├── index.js        # Main server file
├── package.json    # Dependencies
├── .env            # Environment variables
```

## Contributing
This project was originally developed by Rohit Dharmavaram. Contributions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).

