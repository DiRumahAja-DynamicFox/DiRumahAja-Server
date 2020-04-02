const {OAuth2Client} = require('google-auth-library');
const { generateToken } = require('../helpers/jwt')


class Controller {
    static login(req, res, next) {
        res.status(200).json('success to login')
    }

    static register(req, res, next) {
        res.status(200).json('success to register')
    }

    static googleSign(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''
        client.verifyIdToken({
            idToken : id_token,
            audience : process.env.CLIENT_ID
        })
            .then(ticket => {
                email = ticket.getPayload().email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(data => {
                if(data) {
                    let payload = {
                        email: data.email,
                        id: data.id
                    }
                    let token = generateToken(payload)
                    return res.status(200).json({
                        token,
                        id : data.id, 
                        email : data.email
                    })
                }
                else {
                    return User.create({
                        email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                }
            })
            .then(data=> {
                let payload = {
                    email: data.email,
                    id: data.id
                }
                let token = generateToken(payload)
                return res.status(201).json({
                    token,
                    id : data.id, 
                    email : data.email
                })
            })
            .catch(err => {
                return next(err)
            })

    }
}

module.exports = Controller

  

  