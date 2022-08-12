const { Card, Library, User, sequelize } = require('../models')

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['name', 'email']
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}



module.exports = {
    getUserById
}

