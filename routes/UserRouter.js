const Router = require('express').Router()
const controller = require('../controller/userController')

Router.get('/user', controller.getUserById)
