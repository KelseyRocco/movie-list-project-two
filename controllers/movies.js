const Movie = require('../models/movie');


function newMovie(req, res) {
    res.render('movies/new');
};


module.exports = {
    new: newMovie

}