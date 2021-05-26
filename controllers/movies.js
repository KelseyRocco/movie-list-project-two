const Movie = require('../models/movie');


function newMovie(req, res) {
    res.render('movies/new');
};


function index(req, res) {
    Movie.find({}, function (err, movies) {
        if (err) {
            return console.log(err);
        }
        res.render('/friends/:id', {movies});
    });
}

function create(req, res) {
    const movie = new Movie(req.body);
    movie.save(function(err){
        if(err) return res.render('movies/new');
        console.log(movie);
        res.redicrect('/movies')
    })
}

function show(req, res) {
    Movie.findById(req.params.id, function(err, friend) {
        res.render('friends/:id', { title: 'Movie', movie });
    });
}

module.exports = {
    new: newMovie,
    create,
    index,
    show

}


