import mongoose from "mongoose";


const dbConnection = () => {
    mongoose.connect(URI)
}