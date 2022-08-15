const Router = require('express').Router()
const controller = require('../controller/libraryController')

Router.get('/:user_id/:library_id', controller.getLibraryByUserId)




module.exports = Router