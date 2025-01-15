const express = require('express');
const { getBooks, addBook } = require('../controllers/bookController');
const { registerUser, loginUser, authenticateToken } = require('../controllers/authController');
const router = express.Router();

router.get('/getbooks', getBooks);
router.post('/addbook', addBook);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post("/verif", authenticateToken);

module.exports = router;