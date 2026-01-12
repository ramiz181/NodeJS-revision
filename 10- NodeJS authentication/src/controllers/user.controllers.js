import { AuthUser } from "../models/user.model.js"


export const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body

    await AuthUser.create({
        name,
        email,
        password
    })

    return res.render('home')
}