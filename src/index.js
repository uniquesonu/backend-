// require("dotenv").config({path: "./config.env"});
import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./config.env",

});

connectToDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("DB connected");
}).catch((error) => {
    console.log("Mongo DB connection failed::")
    console.error(error);
    process.exit(1);
});













// Path: src/index.js

/*
import express from "express";

const app = express();

( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error(`Error: ${error.message}`);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }catch(error){
        console.error(error);
        throw error;
    }
} )()
*/