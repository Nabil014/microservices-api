const { Router } = require('express')
const controller = require('../controller')

const router = Router()

router.get('/characters', controller.getCharacters)

router.post('/characters', controller.createCharacter)

module.exports = router
