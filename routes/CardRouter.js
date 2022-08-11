const Router = require('./express').Router()
const controller = require('../controller/cardController')

Router.get('/card', controller.getCardById)