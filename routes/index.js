const router = require('express').Router()
const usersRouter = require('./user')
const memesRouter = require('/meme_api')
router.get('/', (req, res) => res.send('success connected to server'))

router.use('/users', usersRouter)
router.use('/meme', memesRouter)

module.exports = router