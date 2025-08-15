const express = require('express')
const NewsController = require('../controllers/newsController')
const router = express.Router()

router.get('/', NewsController.getNews)
router.get('/headlines', NewsController.headlinesNews)
router.get('/headlines/:category', NewsController.getNewsByCategory)
router.get('/detail/:title', NewsController.getNewsDetail)

module.exports = router