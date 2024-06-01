// require("dotenv").config({path: "./config.env"});
import dotenv from "dotenv";
import connectToDB from "./db/index.js";

dotenv.config({
    path: "./config.env",

});

connectToDB();













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