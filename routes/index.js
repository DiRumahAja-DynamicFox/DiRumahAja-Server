const router = require('express').Router()
const usersRouter = require('./user')

router.get('/', (req, res) => res.send('success connected to server'))
router.use('/users', usersRouter)

module.exports = router