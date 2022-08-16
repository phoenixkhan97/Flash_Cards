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
      Card.belongsTo(models.User, { foreignKey: 'creator_id' }),
  
        Card.belongsTo(models.Library,{
          as:'card',
          through: models.library,
          foreignKey: 'cards_id'
        })
    }
  }
  Card.init(
    {
      type: DataTypes.STRING,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      creatorId: {
        type: DataTypes.INTEGER,
        field: 'creator_id',
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