const Router = require('express').Router()
const controller = require('../controller/userController')

Router.get('/:id', controller.getUserById)
Router.get('/name')

module.exports = Router
