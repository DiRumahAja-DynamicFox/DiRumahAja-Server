const { Favorite } = require('../models')

function authorization(req, res, next) {
    let { id } = req.params
    Favorite.findByPk(id)
        .then(result => {
            if(result) {
                if(result.UserId == req.currentUserId) {
                    return next()
                } else {
                    return next({
                        name: "Unauthorized",
                        errors: [{ msg: 'Unauthorized' }]
                    })
                }
            } else {
                return next({
                    name: "NotFound",
                    errors: [{ msg: 'Favorites Not Found' }]
                })
            }
        })
        .catch(err => {
            return next({
                name: "InternalServerError",
                errors: [{ msg: err }]
            })
        })

}

module.exports = authorization