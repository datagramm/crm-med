const dotenv = require('dotenv');
const mongoose = require('mongoose');
const db = process.env.SECRET_MONGO_URI;

mongoose.set('strictQuery', true);
module.exports = {
    connectToDataBase() {
        mongoose.connect(db).then(res => {
            console.log('Connected to DB');
        })
    },

}