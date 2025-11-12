import http from 'http'
import fs from 'fs'
import os from 'os'


console.log(os.cpus().length);

const server = http.createServer((req, res) => {

    const logs = `${Date.now()} ${req.url}  New Client Request...\n`

    fs.appendFile('client.txt', logs, () => {
        res.end("Homepage")
    })
})

server.listen(3000, () => console.log("Server started...!"));