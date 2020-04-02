class Controller {
    static login(req, res, next) {
        res.status(200).json('success to login')
    }

    static register(req, res, next) {
        res.status(200).json('success to register')
    }
}

module.exports = Controller