const express = require('express')
const router = express.Router()

const newsRouter = require('./newsRouter')

router.use('/news', newsRouter)

module.exports = router