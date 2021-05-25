var express = require('express');
var router = express.Router();

const User = require('../models/user');
const friendsCtrl = require('../controllers/friends');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  User.findById(req.user.id)
  .then(function(user) {
    res.render('users', {user}
  )})
});

router.get('/users', friendsCtrl.new);

router.post('/users', friendsCtrl.create);


module.exports = router;
