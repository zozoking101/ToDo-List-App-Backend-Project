const mongoose = require('mongoose')


const connectMongodb = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/todoDb") // process.env.CONNECTION_URL 
        console.log("Database connection successful")
    } catch(error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectMongodb