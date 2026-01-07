import express from 'express'
import fs from 'fs'

const app = express()
const PORT = 5000

app.get('/api/', (req, res) => {
    res.send("sending headers")
})

app.listen(PORT, () => console.log("Server started"));