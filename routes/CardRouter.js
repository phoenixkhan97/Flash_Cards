
const Router = require('express').Router()
const controller = require('../controller/cardController')
const middleware = require('../middleware')

Router.get(
  '/:card_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,

  controller.getCardById
);
Router.get(

  '/card/:user_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.getAllTypes
)

Router.get(
  '/find/:user_id/:type',

  //   middleware.stripToken,
  //   middleware.verifyToken,

  controller.getAllByTypeAndUserId
);
Router.post(

  '/:user_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.createCard
)

Router.put(
  '/:card_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.updateCard
)

Router.delete(
  '/:card_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.deleteCard
)
module.exports = Router

