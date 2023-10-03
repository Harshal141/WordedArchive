const mongoose = require('mongoose');

require('dotenv').config({path:__dirname+'/./../../.env'})

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        console.log('first')
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;