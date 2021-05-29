const Movie = require('../models/movie');


function newMovie(req, res) {
    res.render('movies/new');
};


function index(req, res) {
    Movie.find({}, function (err, movies) {
        if (err) {
            return console.log(err);
        }
        res.render('./movies/index', {movies});
    });
}

function create(req, res) {
    const movie = new Movie(req.body);
    movie.save(function(err){
        if(err) return res.render('movies/new');
        console.log(movie);
        res.redirect('/movies/index')
    })
}

function show(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        res.render('movies/show', { title: 'Movie Detail', movie });
    });
}

// // function deleteComment(req, res, next) {
// //     Movie.findOne({'movie._id': req.params.id}, function(err, movie) {
// //         movie.comment.id(req.params.id).remove();
// //         movie.save(function(err) {
// //         res.redirect('/movies');
// //         });
// //     });
// }

module.exports = {
    new: newMovie,
    create,
    index,
    show,
}

