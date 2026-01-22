import express from 'express'
import path from 'path'
import multer from 'multer'
const app = express()
const PORT = 5001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))



// const upload = multer({ dest: 'upload/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        return cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage })

app.get('/', (req, res) => {
    res.render("home", {
        username: "Ramiz"
    })
})

app.post('/profile', upload.single('profileImage'), (req, res) => {
    console.log(req.file)

    res.redirect('/')
})

app.listen(PORT, () => console.log("Server started"));