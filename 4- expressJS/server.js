import express from 'express'
import http from 'http'


const app = express()

app.get('/', (req, res) => {
    res.send(`Hey ${req.query.name}`)
})

app.get('/about', (req, res) => {
    res.send(`Hey ${req.query.name}`)
})

const server = http.createServer(app)

server.listen(3000, () => console.log("Server started at PORT 3000"));