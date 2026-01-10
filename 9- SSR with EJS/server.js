import express from 'express'
import { dbConnection } from './src/config/db.config.js'
import dotenv from 'dotenv'


const app = express()
const PORT = 5000

dotenv.config();
dbConnection()
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

// app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("<h1>Ramiz! Full-stack web developer</h1>")
})

app.listen(PORT, () => console.log("Server started"));