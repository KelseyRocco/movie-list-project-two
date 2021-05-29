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


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

router.get('/friends/index', isLoggedIn, friendsCtrl.index);

router.get('/friends/new', isLoggedIn,  friendsCtrl.new)

router.get('/friends/:id', isLoggedIn,  friendsCtrl.show)

router.post('/users', isLoggedIn, friendsCtrl.create);

module.exports = router;
