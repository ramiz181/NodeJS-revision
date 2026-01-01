import http from 'http'
import fs from 'fs'
import url from 'url'

const PORT = 3000

const app = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end("favicon...")
    }
    const logs = `${Date.now()} localhost:${PORT}${req.url}\n`

    // url.parse  ==> URL ko parse krta h
    // or jub last mn true kr den to query parameter bhe parse ho jta h 

    // on true ==> query: [Object: null prototype] { id: '12' },
    // on false ==> query: 'id=12',

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
                res.end(`I am ${services} expert...`)
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

app.listen(3000, console.log("server started on PORT: 3000"));