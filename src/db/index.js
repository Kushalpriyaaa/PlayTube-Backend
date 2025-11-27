import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    //In Node.js, a process represents the current running instance of your application. It is an object that provides information and control over the execution of the program.
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongodb connection error", error);
        process.exit(1); // Exit the process with a failure code
    }
    }
export default connectDB;

//now lets import this on index.js file and execute it there