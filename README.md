# Client-Server Architecture Demo

A simple, beginner-friendly demonstration of client-server architecture using Node.js and Express.

## Overview

This demo shows the complete request-response cycle:
- A browser (client) makes HTTP requests to a server
- The server processes requests and sends back responses
- The client updates the UI based on server responses

## Prerequisites

- Node.js installed (version 14 or higher)
- npm (comes with Node.js)

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Demo

1. Start the server:
```bash
npm start
```

2. Open your browser and visit:
```
http://localhost:3000
```

3. Click the buttons to see the request-response cycle in action:
   - **Get Users**: Makes a GET request to `/api/users` and displays the response
   - **Create User**: Makes a POST request to `/api/users` with JSON data and displays the created user

## Project Structure

```
basic-server-client-demo/
├── server.js          # Express server with REST API endpoints
├── public/
│   └── index.html     # Client HTML page with JavaScript
├── package.json       # Project dependencies
└── README.md         # This file
```

## How It Works

### Server (`server.js`)

- **Express Framework**: Simplifies HTTP server creation
- **Static File Serving**: Serves HTML/CSS/JS files from the `public/` directory
- **REST API Endpoints**:
  - `GET /api/users`: Returns all users as JSON
  - `POST /api/users`: Creates a new user from JSON request body
- **In-Memory Storage**: Uses an array to store users (no database for simplicity)

### Client (`public/index.html`)

- **HTML**: Provides the user interface with buttons
- **JavaScript**: Uses the `fetch()` API to make HTTP requests
- **DOM Updates**: Displays API responses in the browser

## Key Concepts Demonstrated

1. **Request-Response Cycle**: How clients send requests and servers respond
2. **HTTP Methods**: GET (retrieve data) and POST (create data)
3. **JSON Communication**: How data is formatted and exchanged
4. **REST API**: Resource-based URL structure (`/api/users`)
5. **Client-Side JavaScript**: Making API calls from the browser
6. **Server-Side Processing**: Parsing requests and generating responses

## Learning Points

- **Express Routes**: How URLs map to handler functions
- **Middleware**: `express.json()` parses JSON bodies, `express.static()` serves files
- **Request Object (`req`)**: Contains request data (body, params, headers)
- **Response Object (`res`)**: Used to send data back (`.json()`, `.status()`)
- **Fetch API**: Modern JavaScript way to make HTTP requests
- **Stateless HTTP**: Each request is independent (server doesn't remember previous requests)

## Next Steps

To extend this demo, you could:
- Add PUT endpoint to update users
- Add DELETE endpoint to remove users
- Connect to a real database (MongoDB, PostgreSQL, etc.)
- Add error handling
- Add input validation
- Add authentication

## Troubleshooting

- **Port 3000 already in use**: Change the port number in `server.js` (line 47)
- **Cannot find module 'express'**: Run `npm install` again
- **Page not loading**: Make sure the server is running (`npm start`)
