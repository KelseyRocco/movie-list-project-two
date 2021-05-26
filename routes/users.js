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


router.get('/friends/index', friendsCtrl.index);

router.get('/friends/new', friendsCtrl.new)

router.get('/friends/:id', friendsCtrl.show)

router.post('/users', friendsCtrl.create);

router.delete('/friends/:id', friendsCtrl.delFriend);

module.exports = router;
