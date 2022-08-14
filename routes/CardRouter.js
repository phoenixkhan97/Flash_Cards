const Router = require('express').Router()
const controller = require('../controller/cardController')

Router.get('/:card_id', controller.getCardById)
Router.get('/card/:user_id', controller.getAllTypes)
Router.get('/card/:type', controller.getAllByType)

Router.post('/:user_id', controller.createCard)

Router.put('/:card_id', controller.updateCard)

Router.delete('/:card_id', controller.deleteCard)
module.exports = Router
