import express from 'express'
import { dbConnection } from './src/config/db.config.js'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.connection.js'
import path from 'path'


const app = express()
const PORT = 5000

dotenv.config();
// dbConnection()
connectDB()
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

// app.use('/api/user', userRouter)

app.get('/', async (req, res) => {

    const shortURLs = await (await connectDB()).collection('urls').find({}).toArray();

    // shortURLs.map(url => {
    //     console.log(url.shortURL);
    // })

    return res.send(`
            <html>
                <head></head>
                <body>
                    <ul>
                        ${shortURLs.map(url => {
        return `<li>${url.shortURL} - ${url.redirectURL}</li>`
    }).join('')}
                    </ul>
                </body>
            </html>
        `)

})

app.get('/test/', async (req, res) => {

    const URLs = await (await connectDB()).collection('urls').find({}).toArray();

    res.render('home', {
        URLs,
    })

})

app.listen(PORT, () => console.log("Server started"));