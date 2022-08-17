const Router = require('express').Router()
const controller = require('../controller/userController')

Router.get('/:id', controller.getUserById)
Router.put('/:id', controller.updateUserName)

module.exports = Router
