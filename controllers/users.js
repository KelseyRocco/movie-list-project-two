function index(req, res, next) {

        res.render('users/index', {
            users,
            user: req.user,
            name: req.query.name,
            sortKey
        })
    };


    // function addFriend(req, res, next) {
    //     req.user.friends.push(req.body);
    //     req.user.save(function(err) {
    //         res.redirect('/users');
    //     });
    // }

    