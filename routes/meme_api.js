const router = require('express').Router()
const MemeAPIController = require('../controllers/meme')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', MemeAPIController.getMeme)
router.get('/:subreddit', MemeAPIController.getSubredditMeme)

module.exports = router