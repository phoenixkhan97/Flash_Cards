const Router = require('express').Router()
const controller = require('../controller/authController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)

Router.put(
  '/update/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdatePassword
)

Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
module.exports = Router
