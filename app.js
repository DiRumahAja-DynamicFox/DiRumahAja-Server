require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use( (err, req, res, next) => {
    switch (err.name) {
        case "SequelizeValidationError":
            const errors = err.errors[0].msg.errors.map( el => ({ msg: el.message }))
            return res.status(400).json({
                code: 400,
                type: "Bad Request",
                errors
            })

        case "BadRequest":
            return res.status(400).json({
                code: 400,
                type: "Bad Request",
                errors: err.errors
            })

        case "Unauthorized":
            return res.status(401).json({
                code: 401,
                type: "Unauthorized",
                errors: err.errors
            })

        case "NotFound":
            return res.status(404).json({
                code: 404,
                type: "Not Found",
                errors: err.errors
            })
        
        default:
            return res.status(500).json({
                code: 500,
                type: "Internal Server Error",
                errors: err.errors
            })
    }
})

app.listen(PORT, () => console.log('I LOVE U: ', PORT))