const Movie = require('../models/movie');

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie){
        movie.comment.push(req.body);
        movie.save(function(err){
            res.redirect(`movie/${movie._id}`);
        });
    });
}

// function deleteComment(req, res, next) {
//     Movie.findOne({'movie._id': req.params.id}, function(err, movie) {
//         movie.comment.id(req.params.id).remove();
//         movie.save(function(err) {
//         res.redirect('/movies');
//         });
//     });
// }


module.exports = {
    create,
    // delete: deleteComment
};