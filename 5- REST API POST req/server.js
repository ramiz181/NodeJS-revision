import express, { urlencoded } from 'express'
import fs from 'fs'
import users from './USERS.json' with {type: 'json'}

const app = express()
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("sending request to server...")
})

// const id = req.params.id
app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log(body);
    users.push(body)

    fs.writeFile("USERS.json", JSON.stringify(users), (error) => {
        if (error) throw error
    })
    return res.json({ message: "data sent to server..." })
})

app.listen(3000, () => console.log("..."));