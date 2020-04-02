const { Favorite } = require('../models')

class Controller {
    static findAll(req, res, next) {
        Favorite.findAll({
            where: {
                id: req.currentUserId
            }, 
            include: [ User ],
            order: [
                ['createdAt', 'ASC']
            ]
        })
    }

    static create(req, res, next) {
        let payload = {
            url: req.body.url,
            UserId: req.currentUserId
        }
        Favorite.create(payload)
            .then(result => {
                return res.status(201).json({
                    result,
                    msg: "Favorite Saved"
                })
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{ msg: err }]
                })
            })
    }

    static delete(req, res, next) {
        Favorite.destroy({
            where: {
                id: req.params.id
            }
                .then(result => {
                    return res.status(200).json(({
                        msg: "Favorite Deleted"
                    }))
                })
                .catch(err => {
                    return next({
                        name: "InternalServerError",
                        errors: [{ msg: err }]
                    })
                })
        })
    }
}

module.exports = Controller