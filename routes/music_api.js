const router = require('express').Router()
const MusicAPIController = require('../controllers/music')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', MusicAPIController.getMusic)
module.exports = router