const friend = require("../models/friend");


function newFriend(req, res){
    res.render('/users');
}

function index(req, res) {
    Friend.find({}, function(err, friends) {
        if (err) {
            return console.log(err); 
        }
        res.render('/users', { friends });
    });
}

function create(req, res){
    const friend = new Friend(req.body);
    friend.save(function(err) {
        if (err) return res.render('/users');
        console.log(friend);
        res.redirect('/users')
    })
};




module.exports = {
    new: newFriend,
    create,
    index
};