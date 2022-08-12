const Router = require('express').Router()
const controller = require('../controller/userController')

Router.get('/:id', controller.getUserById)

module.exports = Router
