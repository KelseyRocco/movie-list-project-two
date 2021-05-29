const Movie = require('../models/movie');

// function create(req, res) {
//     Movie.findById(req.params.id, function(err, movie){
//         movie.comments.push(req.body);
//         movie.save(function(err){
//             res.redirect(`/movies/${movie._id}`);
//         });
//     });
// }

function newComment(req, res) {
    res.render('movies/show');
}

function show(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
<<<<<<< HEAD
        res.render('movies/:id', { title: 'Movie', movie });
=======
        res.render('movies/show', { title: 'Movie', movie });
>>>>>>> 62c3ddd555a25bbc31f94c05f7dbcc075ce0fffb
    });
}



module.exports = {
    new: newComment,
    show
<<<<<<< HEAD
    // create
=======
>>>>>>> 62c3ddd555a25bbc31f94c05f7dbcc075ce0fffb
}