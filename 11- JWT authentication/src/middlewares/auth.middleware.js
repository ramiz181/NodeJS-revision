import { getUser } from "../services/auth.service.js"



export const restrictToLoggedInUserOnly = (req, res, next) => {

    const userUuid = req.cookies?.uuid
    if (!userUuid) return res.redirect('/login?error=User%not%logged-in')

    const user = getUser(userUuid)
    if (!user) return res.redirect('/login?error=User%not%found')

    req.user = user
    next()
}