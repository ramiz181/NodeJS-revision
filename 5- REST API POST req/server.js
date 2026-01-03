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

    // spread the body....add id key...
    users.push({ ...req.body, id: users.length + 1 })

    fs.writeFile("USERS.json", JSON.stringify(users), (error) => {
        if (error) throw error
    })
    return res.json({ message: "User saved successfully..." })
})



// edit krna h data ksi bhe ID ka 

app.put('/api/users/:id', (req, res) => {

    const body = req.body
    const id = Number(req.params.id)
    let updatedUser

    // PATCH HTTP method styled API
    // updatedUser = users.map(user => {
    //     return user.id === id
    //         ? { ...user, ...body }
    //         : user
    // })

    // PUT HTTP method styled API
    updatedUser = users.map(user => {
        return user.id === id
            ? { id, ...body }
            : user
    })

    fs.writeFile("USERS.json", JSON.stringify(updatedUser), (err) => {
        if (err) throw err
    })
    return res.json({ message: "user updated" })



    // console.log("line 41", (updatedUser));
    // users.splice(0, id - 1, updatedUser);
    // users.splice(id - 1, 1, { id: id, name: "Ramiz" });
    // console.log(users);
    // console.log(id, body);

    // users.push(updatedUser)
    // JSON.stringify(users)

})

app.listen(3000, () => console.log("server started"));