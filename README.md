# User Management Task

## About the Project

This is a full stack User Management Application developed as part of an internship assignment.

The application allows users to add, view and delete user records. The frontend is built using React and TypeScript, while the backend is developed using Node.js and Express. MongoDB Atlas is used for storing user data.

## Features

* Add a new user
* View all users
* Delete a user
* Form validation
* MongoDB database integration
* REST API implementation

## Tech Stack

### Frontend

* React
* TypeScript
* Axios

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

* frontend → React application
* backend → Express server and APIs
* MongoDB Atlas → Database

## API Endpoints

### Add User

POST /api/users

### Get Users

GET /api/users

### Delete User

DELETE /api/users/:id

## How to Run the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in the backend folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## What I Learned

While working on this project, I gained hands-on experience with:

* React Hooks
* TypeScript interfaces
* REST API development using Express
* MongoDB Atlas integration
* CRUD operations
* Connecting frontend and backend applications

## Running the Application

After starting both servers:

Frontend:
http://localhost:5173

Backend:
http://localhost:5000

API Base URL:
http://localhost:5000/api/users
