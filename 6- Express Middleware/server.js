import express from 'express'
import fs from 'fs'
import users from './users.json' with {type: 'json'}

const app = express()
const PORT = 3000
// app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    const logs = `\n${Date.now()} ${req.ip} ${req.method} ${req.path}`
    fs.appendFile('logs.txt', logs, (err) => { if (err) throw err })
    next();
})

app.use((req, res, next) => {

    const date = new Date()
    date.setDate(date.getDate() + 5)
    const laterDate = date
        .toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })
    // .replace(/ /g, "-"); // ==> use when "en-GB" specifies the locale British English

    req.creditCardDetails = {
        name: "ramiz",
        email: 'admin@gmail.com',
        cardNumber: '921143576',
        expireDate: laterDate
    }
    next()
    // res.end("server end")
})

app.get('/api/users', (req, res) => {
    // console.log(req.creditCardDetails);
    res.json(req.creditCardDetails)
})


// this is the general API, works for any METHOD, and any route for /users
app.use('/users', (req, res, next) => {
    res.send("testing API route")
})


app.listen(PORT, () => console.log("Server started"));