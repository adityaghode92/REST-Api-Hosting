const mongoose = require('mongoose')


const connectDB = (uri)=>{
    return mongoose.connect(uri)
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch((err) => {
        console.error("DB CONNECTION ERROR:", err);
    });
}

module.exports = connectDB;