const axios = require('axios')

class RecipeAPIController {
    static getRecipe(req, res, next) {
        const name = req.query.name
        axios.get(`http://www.recipepuppy.com/api/?q=${name}`)
            .then((result) => {
                console.log(result.data)
                const data = result.data
                return res.status(200).json({ data })
            })
            .catch((err) => {
                return next(err)
            })
    }
}

module.exports = RecipeAPIController