var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/movies/:id/comments', commentsCtrl.create);

// router.delete('/movies/:id/comments', commentsCtrl.delete);


module.exports = router;