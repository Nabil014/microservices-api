const { Router } = require('express')
const controller = require('../controller')

const router = Router()

router.get('/films', controller.getFilms)

module.exports = router
