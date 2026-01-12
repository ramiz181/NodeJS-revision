import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './src/config/db.config.js';

const app = express()
const PORT = 5000

dotenv.config();
dbConnection()
app.use(express.urlencoded({ extended: false }))


app.get('/', async (req, res) => {

    res.send("Node.js authentication")
})


app.listen(PORT, () => console.log("Server started"));