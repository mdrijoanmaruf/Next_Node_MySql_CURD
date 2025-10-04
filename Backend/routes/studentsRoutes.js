const express = require('express');
const { getStudents } = require('../controllers/studnetController');

// Router Object
const router = express.Router();

// Routes
// Get all students List | GET
router.get("/getall" , getStudents)

// Root: redirect to /students/getall so visiting /students works
router.get('/', (req, res) => {
	return res.redirect('/students/getall');
});

// Root route for /students - redirect to /students/getall
router.get('/', (req, res) => {
	// you can change this to render a page or return a message
	res.redirect('/students/getall');
});

module.exports = router;