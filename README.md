# MERN Test Project

This project is a MERN stack application designed to manage employees and departments within an organization.

## Features

- Signup/Login functionality for employees and managers.
- Department management for managers.
- Employee list display and details page.
- Filtering employees by location and name.
- Role-based access control.

## Technologies Used

- MongoDB: Database for storing employee and department information.
- Express.js: Backend framework for building RESTful APIs.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for backend development.
- JWT (JSON Web Tokens): Used for authentication and authorization.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using the command: `npm install`.
4. Start the backend server using: `npm run server`.
5. Start the frontend development server using: `npm start`.
6. Access the application in your web browser at: `http://localhost:3000`.

## API Endpoints

- **Signup**: POST `/api/auth/signup`
- **Login**: POST `/api/auth/login`
- **Departments**: CRUD operations on `/api/departments`
- **Employees**: CRUD operations on `/api/employees`
- **Filter Employees by Location**: GET `/api/employees/filter/location`
- **Filter Employees by Name**: GET `/api/employees/filter/name`

## Contributors

- Vijay <vijayhgirase2000@gmail.com>

