const express = require('express');
const router = express.Router();
const books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Dystopian' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960, genre: 'Fiction' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925, genre: 'Classic' }
];
router.get('/book', (req, res) => {
    res.json(books);
});



module.exports = router;