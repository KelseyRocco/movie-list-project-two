const Friend = require('../models/friend');

    
function newFriend(req, res) {
    res.render('friends/new');
};

function index(req, res) {
    Friend.find({}, function (err, friends) {
        if (err) {
            return console.log(err);
        }
        res.render('friends/index', {friends});
    });
}



function show(req, res) {
    Friend.findById(req.params.id, function(err, friend) {
        res.render('friends/show', { title: 'Friend', friend });
    });
}

function create(req, res) {
    const friend = new Friend(req.body);
    friend.save(function(err){
        if(err) return res.render('friends/new');
        console.log(friend);
        res.redirect('/users');
    })
}

<<<<<<< HEAD
=======
// function delFriend(req, res, next) {
//         friend.index.id(req.params.id).remove();
//         friend.save(function(err) {
//             res.redirect('/index');
//         });
// };

>>>>>>> 62c3ddd555a25bbc31f94c05f7dbcc075ce0fffb
module.exports = {
    new: newFriend,
    index,
    create,
    show
    // delFriend
};
