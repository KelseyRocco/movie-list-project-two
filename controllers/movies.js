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
<<<<<<< HEAD
        res.render('movies/show', { title: 'Movie Detail', movie });
=======
        res.render('movies/show', { title: 'Movie', movie });
>>>>>>> 62c3ddd555a25bbc31f94c05f7dbcc075ce0fffb
    });
}

function deleteMovie(req, res, next) {
    Movie.findByIdAndDelete(req.params.id, function(err, movie) {
        if(err){
            console.log(err)
        }
        res.redirect('/movies/index');
        })
    };


module.exports = {
    new: newMovie,
    create,
    index,
    show,
    delete: deleteMovie
}

