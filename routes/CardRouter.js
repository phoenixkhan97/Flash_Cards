const Router = require('express').Router()
const controller = require('../controller/cardController')

Router.get('/card', controller.getCardById)
Router.get('/card/types', controller.getAllByType)

Router.post('/:card_id', controller.createCard)

Router.update('/:card_id', controller.updateCard)

Router.destroy('/:card_id', controller.deleteCard)
module.exports = Router
