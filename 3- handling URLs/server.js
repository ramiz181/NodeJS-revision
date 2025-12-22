import http from 'http'
import fs from 'fs'
import url from 'url'

const PORT = 3000

const app = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end("favicon...")
    }
    const logs = `${Date.now()} localhost:${PORT}${req.url} \n`

    const parseURL = url.parse(req.url, true);
    console.log(parseURL);

    fs.appendFile('logs.txt', logs, (err) => {

        if (err) throw err

        switch (parseURL.pathname) {
            case '/':
                res.end("Homepage...")
                break;
            case '/about':
                const username = parseURL.query.name;
                res.end(`${username} fullstack developer...`)
                break;
            case '/services':
                const services = parseURL.query.service
                res.end(`I am ${services}...`)
                break;
            case '/contact':
                res.end("contact me...")
                break;
            default:
                res.end("404...not found")
                break;
        }
    })
})

app.listen(3000, console.log("server started successfully..."));