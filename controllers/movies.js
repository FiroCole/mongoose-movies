const Movie = require('../models/movie');
// set up module.exports
module.exports = {
    new: newMovie,
    create,
    index
};

// set up controller functions
function newMovie(req, res) {
    res.render('movies/new', {errorMsg: ''});
}

function create(req, res) {
   Movie.create(req.body)
   .then(function(newMovie) {
        console.log('newMovie: ', newMovie);
        res.redirect('/movies/new'); // url path
   }).catch(function(error) {
        console.log('error: ', error);
        res.render('movies/new', {errorMsg: 'invalid data'});
        // ^ render uses file path
   });
}

function index(req, res) {
    Movie.find({})
        .then(function(movies) {
            res.render('movies/index', {
                movies
            });
        }).catch(function(error) {
            console.log('error: ', error);
            res.render('error', { error });
            // fine for development
            // remove for production
        });
}