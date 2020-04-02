const axios = require('axios')

class MemeAPIController {
    static getMeme(req, res, next) {
        axios.get(`https://meme-api.herokuapp.com/gimme`)
            .then((result) => {
                const memedata = result.data
                return res.status(200).send({ memedata })
            })

        .catch((err) => {
            return next(err)
        })
    }

    static getSubredditMeme(req, res, next) {
        let subreddit = req.params.subreddit
        axios.get(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
            .then((result) => {
                return res.status(200).json({ data: result.data })
            })

        .catch((err) => {
            return next(err)
        })
    }
}

module.exports = MemeAPIController