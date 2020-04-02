const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication(req, res, next) {
    try{
        let decoded = verifyToken(req.headers.access_token)
        let { id } = decoded
        User.findByPk(id)
            .then(result => {
                if (result) {
                    req.currentUserId = result.id
                    return next()
                } else {
                    return next({
                        name: "NotFound",
                        errors: [{ msg: 'User Not Found'}]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: "Unauthorized",
                    errors: [{ msg: 'Unauthorized'}]
                })
            })
    } catch (err) {
        return next({
            name: "InternalServerError",
            errors: [{ msg: err}]
        })
    }
}

module.exports = authentication