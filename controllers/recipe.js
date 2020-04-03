const axios = require('axios')

class RecipeAPIController {
    static getRecipe(req, res, next) {
        let page = Math.ceil(Math.random() * 20)
        if (req.params.id) page = req.params.id
        axios.get(`http://www.recipepuppy.com/api/?p=${page}`)
            .then((result) => {
                const recipedata = result.data
                    // console.log(recipedata.results[0])
                return res.status(200).json({ data: recipedata.results[0] })
            })
            .catch((err) => {
                return next(err)
            })
    }
}

module.exports = RecipeAPIController