<<<<<<< HEAD
  
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.get('/show', commentsCtrl.new);

router.get('/index', commentsCtrl.show)


// router.post('/movies/:id/comments', commentsCtrl.create)

module.exports = router;
=======
const express = require('express');
 const router = express.Router();
 const commentsCtrl = require('../controllers/comments');
 

 router.get('/show', commentsCtrl.new);

 router.get('/index', commentsCtrl.show)


//  router.post('/movies/:id/comments', commentsCtrl.create);
 
 module.exports = router;
>>>>>>> 62c3ddd555a25bbc31f94c05f7dbcc075ce0fffb
