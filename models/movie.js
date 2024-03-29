// We define the schema,
// 1) require our deps and setup shortcut variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2 define specific schema
const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
}, {timestamps: true});

/*
timestamps = true will create two addtional field
createAt
updatedAt
*/

// Compile the schema into a model, and
// Export that model.

module.exports = mongoose.model('Movie', movieSchema);
