const axios = require('axios')

class MemeAPIController {
    static getMeme(req, res, next) {
        axios.get(`https://meme-api.herokuapp.com/gimme`)
            .then((result) => {
                return res.status(200).json({ data: result })
            })

        .catch((err) => {
            return next(err)
        })
    }

    static getSubredditMeme(req, res, next) {
        let subreddit = req.params.subreddit
        axios.get(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
            .then((result) => {
                return res.status(200).json({ data: result })
            })

        .catch((err) => {
            return next(err)
        })
    }
}

module.exports = MemeAPIController