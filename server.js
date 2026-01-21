// Import Express framework - a popular Node.js web framework
const express = require('express');

// Create an Express application instance
// This is the main object we'll use to define routes and middleware
const app = express();

// Middleware: Parse JSON request bodies
// When a client sends JSON data (like in POST requests), this middleware
// automatically parses it and makes it available in req.body
app.use(express.json());

// Middleware: Serve static files from the 'public' directory
// This allows the server to serve HTML, CSS, and JavaScript files
// When someone visits '/', Express will look for 'public/index.html'
app.use(express.static('public'));

// In-memory data store (for demo purposes - no database)
// In a real application, this would be a database
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// REST API Endpoint: GET /api/users
// Returns the list of all users as JSON
app.get('/api/users', (req, res) => {
  // req: Request object (contains info about the incoming request)
  // res: Response object (used to send data back to the client)
  
  // Send JSON response with status 200 (OK)
  res.json(users);
});

// REST API Endpoint: POST /api/users
// Creates a new user from JSON data in the request body
app.post('/api/users', (req, res) => {
  // req.body contains the parsed JSON data from the request
  // Example: { name: 'Charlie', email: 'charlie@example.com' }
  
  // Create a new user object with an auto-incremented ID
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  
  // Add the new user to our in-memory array
  users.push(newUser);
  
  // Send back the created user with status 201 (Created)
  res.status(201).json(newUser);
});

// Start the server and listen on port 3000
// The callback function runs when the server successfully starts
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  console.log('Open your browser and visit http://localhost:3000');
});
