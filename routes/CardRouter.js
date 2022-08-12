const Router = require('express').Router()
const controller = require('../controller/cardController')

Router.get('/card', controller.getCardById)
Router.get('/card/types', controller.getAllByType)

Router.post('/:user_id', controller.createCard)

Router.put('/:card_id', controller.updateCard)

Router.delete('/:card_id', controller.deleteCard)
module.exports = Router
