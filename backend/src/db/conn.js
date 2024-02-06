import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const mongooseInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`MongoDB Connected : ${mongooseInstance.connection.host}`);
    } catch (error) {
        console.error(`Failed to connect to the database: ${error}`);
        process.exit(1);
    }
}

export default connectToDB;
