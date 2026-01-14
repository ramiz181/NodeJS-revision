import { verifyToken } from "../services/auth.service.js"



export const restrictToLoggedInUserOnly = (req, res, next) => {

    const userUuid = req.headers['authorization']
    if (!userUuid) return res.redirect('/login?error=User%not%logged-in')
    const token = userUuid.split('Bearer ')[1]

    const user = verifyToken(token)
    if (!user) return res.redirect('/login?error=User%not%found')
    // console.log("auth middleware", user);

    req.user = user
    next()
}