const mongoose = require('mongoose');


const db = mongoose.connect(`mongodb://localhost:27017/ems`)

.then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log('error', err);
})

module.exports = db;