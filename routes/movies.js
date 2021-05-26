const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
	
// GET /movies/new
router.get('/friends/:id/movies', moviesCtrl.new)

	
module.exports = router;