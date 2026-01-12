import { AuthUser } from "../models/user.model.js"


export const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body

    await AuthUser.create({
        name,
        email,
        password
    })

    return res.redirect('/')
}

export const handleUserLogin = async (req, res) => {

    const { email, password } = req.body

    const user = await AuthUser.findOne({ email, password })
    if (!user) return res.render('login')
 
    return res.redirect('/')

}