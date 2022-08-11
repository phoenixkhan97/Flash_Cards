'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Card,{
        foreignKey: "cardsId",
        onDelete:"CASCADE",
        onUpdate: "CASCADE"
      })
      User.hasMany(models.Library,{
        foreignKey: "libraryId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
