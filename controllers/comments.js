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
        res.render('movies/show', { title: 'Movie', movie });
    });
}



module.exports = {
    new: newComment,
    show
}