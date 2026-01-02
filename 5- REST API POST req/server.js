import express from 'express'
import fs from 'fs'
import users from './USERS.json' with {type: 'json'}

const app = express()
app.use(express.urlencoded({ extended: false }));

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    res.json(user)
})

// const id = req.params.id
app.post('/api/users', (req, res) => {

    users.push({ ...req.body, id: users.length + 1 })

    fs.writeFile("USERS.json", JSON.stringify(users), (error) => {
        if (error) throw error
    })
    return res.json({ message: "User saved successfully..." })
})

app.listen(3000, () => console.log("server started"));