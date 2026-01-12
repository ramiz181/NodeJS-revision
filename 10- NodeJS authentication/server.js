import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './src/config/db.config.js';
import router from './src/routes/user.routes.js';
import path from 'path'

const app = express()
const PORT = 5001

dotenv.config();
dbConnection()
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use('/user', router)

app.get('/', async (req, res) => {

    res.send("Node.js authentication")
})


app.listen(PORT, () => console.log("Server started"));