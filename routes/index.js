const router = require('express').Router()

const usersRouter = require('./user')
const favoritesRouter = require('./favorite')

const memesRouter = require('./meme_api')
const recipesRouter = require('./recipe_api')
const musicsRouter = require('./music_api')

router.get('/', (req, res) => res.send('success connected to server'))

router.use('/users', usersRouter)
router.use('/favorites', favoritesRouter) 

router.use('/meme', memesRouter)
router.use('/recipe', recipesRouter)
router.use('/music', musicsRouter)

module.exports = router 
