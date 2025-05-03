const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Book API 📚');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});