import http from 'http'
import fs from 'fs'
import os from 'os'

console.log(os.cpus().length);

const server = http.createServer((req, res) => {

    // req parameter may carry all the information of user.... ip address, kis route/url sy req i etc
    const logs = `${Date.now()} localhost${PORT}${req.url}  New Client Request...\n`

    fs.appendFile('client.txt', logs, (err) => {
        if (err) throw err

        res.end("Homepage")
    })
})
server.listen(3000, () => console.log("Server started...!"));