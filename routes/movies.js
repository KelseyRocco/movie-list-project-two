const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
	

router.get('/new', moviesCtrl.new);

router.get('/index', moviesCtrl.index);

router.get('/index', moviesCtrl.show)

router.post('/', moviesCtrl.create);


	
module.exports = router;