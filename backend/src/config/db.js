require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL);
}

module.exports = { connectDb };
