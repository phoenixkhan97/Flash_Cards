
const {Library} = require('../models')

const getLibraryByUserId = async (req,res) =>{
    try{
      const getLibrary = await Library.findAll({
        include:[{
            model: User,
            as: 'library',
            attributes: ['id', 'user']
        }]
      })
      res.send(getLibrary)
    }catch(error){

    }
}




module.exports = {
    getLibraryByUserId
}
