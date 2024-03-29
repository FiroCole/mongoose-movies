// 1) require the mongoose module
const mongoose = require('mongoose');

// 2 establish connection to mongodb
mongoose.connect(process.env.DATABASE_URL);

// 3 set up connected event listener

// 3.1 shortcut variable
const db = mongoose.connection

// 3.2 event listener
db.on('connected', () => {
    console.log(`Connected to MongoDB ${db.name} on ${db.host}:${db.port}`);
});