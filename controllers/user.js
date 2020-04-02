const { User } = require('../models')
const { decryptPass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) {
        let { email, password } = req.body
        let payload = { email, password }
        
        User.create(payload)
            .then(result => {
                let { id, email } = result
                let user = { id, email }
                return res.status(201).json({
                    email: user.email,
                    msg: 'Successfully Registered'
                })
            })
            .catch(err => {
                return next({
                    name: 'InternalServerError',
                    errors: [{ msg: err}]
                })
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        let payload = { email, password } 
        User.findOne({
            where: {
                email: payload.email
            }
        })
            .then(result => {
                if (result) {
                    let compare = decryptPass(payload.password, result.password)
                    if (compare) {
                        let { id, email } = result
                        let user = { id, email }
                        let token = generateToken(user)
                        return res.status(200).json({
                            'access_token': token
                        })
                    } else {
                        return next({
                            name: "BadRequest",
                            errors: [{ msg: "Invalid Email / Password" }]
                        })
                    }
                } else {
                    return next({
                        name: "NotFound",
                        errors: [{ msg: "User Not Found " }]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'InternalServerError',
                    errors: [{ msg: err}]
                })
            })
    }

}

module.exports = Controller