const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const CardRouter = require('./CardRouter')
const LibraryRouter = require('./LibraryRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/user', UserRouter)
Router.use('/card', CardRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
