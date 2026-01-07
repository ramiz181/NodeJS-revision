import express from 'express'
import fs from 'fs'

const app = express()
const PORT = 5000

app.post('/api/header', (req, res) => {

    // use X- before custom header name to identify it as a custom header
    // built-in headers don't have X- before header name
    // response headers ==>> server ny jo headers bhejy
    res.setHeader('X-token', '99328HRD3AS')
    res.send("server-side headers")
})

app.get('/api/header/', (req, res) => {
    // console.log(req.headers)
    // console.log(req.headers.token)
    // req.headers ==>> client ny jo headers bhejy 
    console.log("line 18", req.headers);

    res.send("client-side headers")
})

app.listen(PORT, () => console.log("Server started"));