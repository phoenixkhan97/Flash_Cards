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

const getUserBySearch = async (req, res) => {
  try {
    let userName = req.query.search
    const userSearch = await User.find({ name: userName })
    res.send(userSearch)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserById,
  getUserBySearch
}
