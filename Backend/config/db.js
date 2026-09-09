const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected', mongoose.connect.name)
    } catch (error) {
        console.error('mongodb connect error',error.message)
        process.exit(1)
    }
}
module.exports = connectDB