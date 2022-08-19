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

const updateUserName = async (req, res) => {
  try {
    let userId = req.params.id
    const userUpdate = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(userUpdate)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUserById,
  updateUserName
}
