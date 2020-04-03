const axios = require('axios')

class MusicAPIController {
    static getMusic(req, res, next) {
        if (!req.query.search) {
            let random = Math.round(Math.random() * 9999999) + 1
            axios.get(`https://api.deezer.com/track/${random}`)
                .then((result) => {
                    let resultdata = result.data
                    res.status(200).json({ data: resultdata })
                })
                .catch((err) => {
                    return next(err)
                })
        } else {
            let search = req.query.search
            axios.get(`https://api.deezer.com/search?q=${search}`)
                .then((result) => {
                    res.status(200).json({ data: result.data.data })
                })
                .catch((err) => {
                    return next(err)
                })
        }
    }
}

module.exports = MusicAPIController