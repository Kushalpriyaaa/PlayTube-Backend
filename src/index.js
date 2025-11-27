// always use try catch and async await while handling data base

//require("dotenv").config({path: "./config/.env"});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  });

// import express from "express";
// const app = express();// we will se many times that database jaise hi connect hochuka h to uske niche kai bar hume listners bhi dikhte h
// // to app kya karsakti h on lgake kai sare events ko listen karsakti h jisme se ek h event bht sare listners hote h

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}` )
//         app.on("error",(error) => {
//             console.log("Error:", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// })()

// this is the first aproach
// now second aproach is with difrent db folder
