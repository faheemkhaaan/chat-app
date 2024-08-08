import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connect to mongodb')
    } catch (error) {
        console.log("Error connecct to mongodb", error)
    }
}

export default connectToMongoDb;