import mongoose from "mongoose";
import dotenv from "dotenv";

const connection = async() => {
    const URI = process.env.MONGO
    try{
        await mongoose.connect(URI, { useNewUrlParser: true });
        console.log("Connected to monogDB.");
    } catch(err){
        throw err;
    }
}

mongoose.connection.on("disconnect", () => {
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected",() => {
    console.log("mongoDB connected!")
})

export default connection;
