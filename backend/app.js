const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable All CORS Requests
app.use(cors());

// Your API routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
