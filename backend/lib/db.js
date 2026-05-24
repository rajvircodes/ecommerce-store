import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log("✅ Database connected success");
        
    } catch (error) {
        console.log("ERROR:-",error.message);
        process.exit(1)
    }
}

export default connectDB