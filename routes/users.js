var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  User.findById(req.user.id)
  .then(function(user) {
    res.render('users', {user}
  )})
});

module.exports = router;
