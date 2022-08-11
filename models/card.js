'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.User, { foreignKey: 'creatorId' })
      Card.belongsToMany(models.User, {
        through: models.Library,
        as: 'cards',
        foreignKey: 'cardId'
      })
    }
  }
  Card.init(
    {
      type: DataTypes.STRING,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      cretorId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards'
    }
  )
  return Card
}
