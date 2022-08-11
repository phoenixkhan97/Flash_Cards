const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const CardRouter = require('./CardRouter')
const LibraryRouter = require('./LibraryRouter')

Router.use('/user', UserRouter)
Router.use('/card', CardRouter)
Router.use('/library', LibraryRouter)


module.exports = Router