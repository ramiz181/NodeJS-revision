import express from 'express'

const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Request proceed...")
})

app.listen(PORT, () => console.log("Server started"));