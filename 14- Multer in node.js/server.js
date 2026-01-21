import express from 'express'
import path from 'path'

const app = express()
const PORT = 5001

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))


app.use(express.json())

app.get('/', (req, res) => {
    res.render("homepage")
})

app.listen(PORT, () => console.log("Server started"));