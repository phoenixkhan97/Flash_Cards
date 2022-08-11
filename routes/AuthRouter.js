const Router = require('express').Router()
const controller = require('../controller/authController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
