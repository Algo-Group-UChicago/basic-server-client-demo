// Function to fetch and display all users (GET request)
async function getUsers() {
    // fetch() is the modern JavaScript API for making HTTP requests
    // By default, fetch() makes a GET request
    const response = await fetch('/api/users');
    
    // Parse the JSON response body
    const users = await response.json();
    
    // Update the DOM to display the results
    document.getElementById('response').innerHTML = `
        <h3>GET /api/users Response:</h3>
        <p>Status: ${response.status} ${response.statusText}</p>
        <pre>${JSON.stringify(users, null, 2)}</pre>
    `;
}

// Function to create a new user (POST request)
async function createUser() {
    // Create sample user data
    const newUser = {
        name: 'Charlie',
        email: 'charlie@example.com'
    };
    
    // fetch() with POST method and JSON body
    const response = await fetch('/api/users', {
        method: 'POST',                    // HTTP method
        headers: {
            'Content-Type': 'application/json'  // Tell server we're sending JSON
        },
        body: JSON.stringify(newUser)       // Convert object to JSON string
    });
    
    // Parse the JSON response (the created user)
    const createdUser = await response.json();
    
    // Update the DOM to display the results
    document.getElementById('response').innerHTML = `
        <h3>POST /api/users Response:</h3>
        <p>Status: ${response.status} ${response.statusText}</p>
        <p>Request Body Sent:</p>
        <pre>${JSON.stringify(newUser, null, 2)}</pre>
        <p>Response (Created User):</p>
        <pre>${JSON.stringify(createdUser, null, 2)}</pre>
    `;
}
