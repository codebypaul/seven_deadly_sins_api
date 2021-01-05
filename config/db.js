const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
        console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB


const db = mongoose.connection
