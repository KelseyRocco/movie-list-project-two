const friend = require("../models/friend");


function newFriend(req, res){
    res.render('/users');
}

function create (req, res){
    const friend = new Friend(req.body);
    friend.save(function(err) {
        if (err) return res.render('/users');
        console.log(friend);
        res.redirect('/users')
    })
};




module.exports = {
    new: newFriend,
    create
};