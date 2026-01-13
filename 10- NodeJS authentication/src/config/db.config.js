import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const dbAuthConnection = mongoose.createConnection(
    process.env.MONGO_URI1
);
dbAuthConnection.on("connected", () => {
    console.log(
        `User - MongoDB Atlas connected: PORT: ${dbAuthConnection.port}, name: ${dbAuthConnection.name}`
    );
});
dbAuthConnection.on("error", (err) => {
    console.error("User DB connection error:", err);
});



export const dbURLConnection = mongoose.createConnection(
    process.env.MONGO_URI2
);
dbURLConnection.on("connected", () => {
    console.log(
        `URL - MongoDB Atlas connected: PORT: ${dbURLConnection.port}, name: ${dbURLConnection.name}`
    );
});
dbURLConnection.on("error", (err) => {
    console.error("URL DB connection error:", err);
});