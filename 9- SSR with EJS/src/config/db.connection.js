import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error('MONGO_URI is not defined');
}

const client = new MongoClient(uri);

export async function connectDB() {


    await client.connect();
    console.log('Connected to MongoDB Atlas');

    return client.db('URL_shortner');

}