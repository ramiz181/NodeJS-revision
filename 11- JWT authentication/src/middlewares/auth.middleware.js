import { verifyToken } from "../services/auth.service.js"



export const restrictToLoggedInUserOnly = (req, res, next) => {

    const userUuid = req.cookies?.uuid
    // const userUuid = req.headers.cookie    // ===> valie
    // const userUuid = req.headers['cookie']

    console.log("Line 10  middleware", userUuid);

    if (!userUuid) return res.redirect('/login?error=User%not%logged-in')

    const user = verifyToken(userUuid)
    if (!user) return res.redirect('/login?error=User%not%found')
    // console.log("auth middleware", user);

    req.user = user
    next()
}