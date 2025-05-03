const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use( express.json() );


// Simulating "database" using array 
let books = 
[
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },   // book 1
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },  // book 2
  { id: 3, title: 'Best Book Ever', author: 'Shruthi Yenamagandla' },  // book 3
];

// GET 
app.get('/', (req, res) => {
  res.send('Welcome to the Book API 📚');
});

// GET all books - endpoint/route is books array, response is each book from the array
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a single book - endpoint/route is books array with its id, compare id with id in url, if id found, return that book as response. else return 404 error. 
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  book ? res.json(book) : res.status(404).json({ msg: 'Book not found' });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



