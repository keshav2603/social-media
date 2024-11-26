import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("\n MongoDB connected !!");
    } catch (error) {
        console.log("MONGODB connection error: ",error);
        process.exit(1);
    }
}

export default connectDB;