const router = require('express').Router()
const RecipeAPIController = require('../controllers/recipe')
    // const authentication = require('../middlewares/authentication')

// router.use(authentication)
router.get('/', RecipeAPIController.getRecipe)
module.exports = router