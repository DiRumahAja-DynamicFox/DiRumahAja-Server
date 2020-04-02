const router = require('express').Router()
const usersRouter = require('./user')
const favoritesRouter = require('./favorite')

router.get('/', (req, res) => res.send('success connected to server'))
router.use('/users', usersRouter)
router.use('/favorites', favoritesRouter)

module.exports = router