const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
/* GET users listing. */

// this router has been appended to the "/movies" path
router.get('/new', moviesCtrl.new);
router.post('/', moviesCtrl.create);
router.get('/', moviesCtrl.index);

module.exports = router;
