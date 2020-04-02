const router = require('express').Router()
const Controller = require('../controllers/favorite')

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.delete('/:id', Controller.delete)

module.exports = router