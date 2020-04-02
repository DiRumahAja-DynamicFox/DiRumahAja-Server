const axios = require('axios')

class MusicAPIController {
    static getMusic(req, res, next) {
        axios.get(`https://api.deezer.com/chart`)
            .then((result) => {
                let resultdata = result.data
                let dataArr = []
                for (let i = 0; i < 5; i++) {
                    let data = {
                        tracks: resultdata.tracks.data[i]
                    }
                    dataArr.push(data)
                }
                res.status(200).json({ data: dataArr })
            })
            .catch((err) => {
                return next(err)
            })
    }

    static getMusicBySearch(req, res, next) {
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

module.exports = MusicAPIController