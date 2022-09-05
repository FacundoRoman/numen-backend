const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN,{
            useNewURLParser: true,
            useUnifiedTopology:true,
        })
        console.log('Database connected');
    } catch  {
        console.log('Connection with database failed');
    }
}
module.exports = {dbConnection};