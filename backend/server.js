const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User created', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
