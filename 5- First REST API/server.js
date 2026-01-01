import express from 'express'
import users from './USERS.json' with { type: 'json' }

const app = express()

app.get('/users', (req, res) => {
    const html = `
    <ul> 
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>`
    res.send(html)
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    let user
    if (req.params.id === "female") {
        user = users.filter(user => user.gender === "Female")
    }
    else if (req.params.id === "male") {
        user = users.filter(user => user.gender === "Male")
    }
    else {
        user = users.find(user => user.id === id)
    }
    res.json(user)
})

app.listen(3000, () => console.log('started...'))
