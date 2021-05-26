const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
	

router.get('/new', moviesCtrl.new);


	
module.exports = router;