const router = require('express').Router()
const MusicAPIController = require('../controllers/music')
    // const authentication = require('../middlewares/authentication')

// router.use(authentication)
router.get('/', MusicAPIController.getMusic)
router.get('/search', MusicAPIController.getMusicBySearch)

module.exports = router